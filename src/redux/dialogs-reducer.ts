import { ActionsType, AppThunk } from './redux-store';
import { dialogAPI } from '../api/api';

// typeof ActionCreators
export type DialogsActionsType =
  | ReturnType<typeof newTextMessageOnChange>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof setDialogsAC>
  | ReturnType<typeof putDialogAC>
  | ReturnType<typeof setMessagesListAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof setTotalCountAC>;

// Actions
const UPDATE_NEW_MESSAGE_TEXT = 'sn/dialogs/UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'sn/dialogs/SEND-MESSAGE';
const SET_DIALOGS = 'sn/dialogs/SET-DIALOGS';
const PUT_DIALOG = 'sn/dialogs/PUT-DIALOG';
const SET_MESSAGES_LIST = 'sn/dialogs/SET-MESSAGES-LIST';
const FETCHING = 'sn/dialogs/FETCHING';
const SET_TOTAL_COUNT = 'sn/dialogs/SET-TOTAL-COUNT';

// ActionCreators
export const newTextMessageOnChange = (newMessage: string) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage } as const;
};
export const sendMessageAC = (message: string) => ({ type: SEND_MESSAGE, message } as const);
export const setDialogsAC = (dialogs: Array<DialogsType>) => ({ type: SET_DIALOGS, dialogs: dialogs } as const);
export const setMessagesListAC = (messages: MessageItemType[]) => ({ type: SET_MESSAGES_LIST, messages } as const);
export const putDialogAC = (userId: number) => ({ type: PUT_DIALOG, userId } as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({ type: FETCHING, isFetching } as const);
export const setTotalCountAC = (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount } as const);

// types for InitialState

export type DialogsType = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: Date;
  lastUserActivityDate: Date;
  newMessagesCount: number;
  photos: Photos;
};
export interface Photos {
  small: string;
  large: string;
}

export type DialogPageType = {
  dialogs: Array<DialogsType>;
  messages: MessageItemType[];
  newMessageState: string;
  userId: number;
  totalCount: number;
  error?: any;
  isFetching: boolean;
  count: number;
};

export type MessageItemType = {
  id: string;
  body: string;
  translatedBody?: any;
  addedAt: Date;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
};

// init state
const initialState: DialogPageType = {
  dialogs: [],
  messages: [],
  newMessageState: '',
  userId: 0,
  error: null,
  totalCount: 0,
  isFetching: false,
  count: 10
};

// reducer
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
  switch (action.type) {
    //onClick
    case SEND_MESSAGE:
      return {
        ...state,
        // newMessageState: "",
        messages: { ...state.messages }
      };
    //onChange
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageState: action.newMessage };
    case SET_DIALOGS:
      return { ...state, dialogs: action.dialogs };
    case SET_MESSAGES_LIST:
      return { ...state, messages: action.messages };
    case PUT_DIALOG:
      return { ...state, userId: action.userId };
    case FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

//thunks
export const getDialogsTC = (): AppThunk => async dispatch => {
  dispatch(toggleIsFetchingAC(true));
  let data = await dialogAPI.getDialogs();
  dispatch(setDialogsAC(data.data));
  dispatch(toggleIsFetchingAC(false));
};

export const putDialogTC =
  (userId: number): AppThunk =>
  async (dispatch, getState) => {
    const count = getState().dialogsPage.count;
    dispatch(toggleIsFetchingAC(true));
    dispatch(getMessagesListTC(userId, count, 1));
    dispatch(toggleIsFetchingAC(false));
  };

export const sendMessageTC =
  (userId: number, messageBody: string): AppThunk =>
  async (dispatch, getState) => {
    const count = getState().dialogsPage.count;
    dispatch(toggleIsFetchingAC(true));
    dispatch(getMessagesListTC(userId, count, 1));
    dispatch(toggleIsFetchingAC(false));
  };
export const getMessagesListTC =
  (userId: number, count: number, page: number): AppThunk =>
  async dispatch => {
    dispatch(toggleIsFetchingAC(true));
    let data = await dialogAPI.getMessagesList(userId, count, page);
    dispatch(setMessagesListAC(data.data.items));
    dispatch(setTotalCountAC(data.data.totalCount));
    dispatch(putDialogAC(userId));
    dispatch(toggleIsFetchingAC(false));
  };
