import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type DialogsActionsType =
    | ReturnType<typeof newMessageOnChangeAC>
    | ReturnType<typeof newMessageOnClickAC>

// ActionCreators
export const newMessageOnChangeAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}
export const newMessageOnClickAC = () => {
    return {
        type: "SEND-NEW-MESSAGE",
    } as const
}

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
        case "SEND-NEW-MESSAGE":
            let message = state.newMessageState;
            let stateCopy = {...state}
            stateCopy.messages.push({id: v1(), message: message});
            stateCopy.newMessageState = "";
            return stateCopy
        //onChange
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageState:action.newMessage}
        default:
            return state
    }
}