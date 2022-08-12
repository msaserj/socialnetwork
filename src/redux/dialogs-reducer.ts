import {v1} from "uuid";
import {ActionsType} from "./redux-store";


export type DialogsActionsType = ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof sendNewMessageAC>


export const updateNewMessageAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}
//message: string
export const sendNewMessageAC = () => {
    return {
        type: "SEND-NEW-MESSAGE",
       // newMessage: message
    } as const
}

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

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageState = action.newMessage;
            return state
        case "SEND-NEW-MESSAGE":
            let message = state.newMessageState;
            state.newMessageState = "";
            state.messages.push({id: v1(), message: message});
            return state
        default:
            return state
    }
}