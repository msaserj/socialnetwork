import {v1} from "uuid";
import {ActionsType, DialogPageType} from "./state.js";

export type DialogsActionsType = ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof sendNewMessageAC>

export const updateNewMessageAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}
export const sendNewMessageAC = (message: string) => {
    return {
        type: "SEND-NEW-MESSAGE",
        newMessage: message
    } as const
}

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {

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