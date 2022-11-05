import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {chatApi, ChatMessageType} from "../api/chat-api";

// typeof ActionCreators
export type ChatActionsType =
    | ReturnType<typeof setMessages>

// Actions
const SET_MESSAGES = 'sn/chat/SET-MESSAGES'


// ActionCreators
export const setMessages = (messages: ChatMessageType[]) => ({type: SET_MESSAGES, payload: {messages}} as const)


// types for InitialState

// type ChatType = {
//     messages: ChatMessageType[]
// }

const initialState = {
    messages: [] as ChatMessageType[]
}
export type InitialStateType = typeof initialState
// reducer
export const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MESSAGES:
            return {...state,
            messages: [...state.messages, ...action.payload.messages]
            }

        default:
            return state
    }
}

// thunk
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setMessages(messages))
        }
    }
  return _newMessageHandler
}

export const startMessagesListeningTC = () => async (dispatch: Dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListeningTC = () => async (dispatch: Dispatch) => {
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
    chatApi.stop()
}

export const sendMessageTC = (message: string) => async () => {
    chatApi.sendMessage(message)
}