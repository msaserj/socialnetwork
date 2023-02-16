import { ActionsType } from './redux-store';
import { Dispatch } from 'redux';
import { chatApi, ChatMessageAPIType } from '../api/chat-api';
import { v1 } from 'uuid';

// typeof ActionCreators
export type ChatActionsType = ReturnType<typeof setMessages> | ReturnType<typeof setStatus>;

// Actions
const SET_MESSAGES = 'sn/chat/SET-MESSAGES';
const SET_STATUS = 'sn/chat/SET-STATUS';

// ActionCreators
export const setMessages = (messages: ChatMessageAPIType[]) => ({ type: SET_MESSAGES, payload: { messages } } as const);
export const setStatus = (status: StatusType) => ({ type: SET_STATUS, payload: { status } } as const);

// types for InitialState

// type ChatType = {
//     messages: ChatMessageType[]
// }

export type StatusType = 'pending' | 'ready' | 'error';

type ChatMessageType = ChatMessageAPIType & { id: string };

const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType
};
export type InitialStateType = typeof initialState;
// reducer
export const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: v1() }))].filter(
          (e, index, array) => index > array.length - 100
        )
      };
    case SET_STATUS:
      return { ...state, status: action.payload.status };
    default:
      return state;
  }
};

// thunk
let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(setMessages(messages));
    };
  }
  return _newMessageHandler;
};
let _newStatusHandler: ((messages: StatusType) => void) | null = null;
const newStatusHandlerCreator = (dispatch: Dispatch) => {
  if (_newStatusHandler === null) {
    _newStatusHandler = status => {
      dispatch(setStatus(status));
    };
  }
  return _newStatusHandler;
};

export const startMessagesListeningTC = () => async (dispatch: Dispatch) => {
  chatApi.start();
  chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
  chatApi.subscribe('status-changed', newStatusHandlerCreator(dispatch));
};

export const stopMessagesListeningTC = () => async (dispatch: Dispatch) => {
  chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
  chatApi.unsubscribe('status-changed', newStatusHandlerCreator(dispatch));
  chatApi.stop();
};

export const sendMessageTC = (message: string) => async () => {
  chatApi.sendMessage(message);
};
