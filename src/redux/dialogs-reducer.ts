import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type DialogsActionsType =
    | ReturnType<typeof newTextMessageOnChange>
    | ReturnType<typeof addMessageOnClick>

// Actions
const UPDATE_NEW_MESSAGE_TEXT = 'sn/dialogs/UPDATE-NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE = 'sn/dialogs/SEND-NEW-MESSAGE'


// ActionCreators
export const newTextMessageOnChange = (newMessage: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage} as const}
export const addMessageOnClick = () => {
    return {type: SEND_NEW_MESSAGE} as const}

// types for InitialState
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageState: string
}
type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}

const initialState: DialogPageType = {
    dialogs: [
        {id: v1(), name: "Serj"},
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Petr"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra"},
        {id: v1(), message: "Yo1"},
        {id: v1(), message: "Yo2"},
        {id: v1(), message: "Yo3"},
    ],
    newMessageState: ""
}
// reducer
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        //onClick
        case  SEND_NEW_MESSAGE:
            return {
                ...state,
                newMessageState: "",
                messages: [...state.messages, {id: v1(), message: state.newMessageState}]
            };
        //onChange
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageState:action.newMessage}
        default:
            return state
    }
}