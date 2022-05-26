import {v1} from "uuid";
import {ActionsType, DialogPageType} from "./state.js";

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {

    if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessageState = action.newMessage;
    } else if (action.type === "SEND-NEW-MESSAGE") {
        let message = state.newMessageState;
        state.newMessageState = "";
        state.messages.push({id: v1(), message: message});
    }
    return state
}