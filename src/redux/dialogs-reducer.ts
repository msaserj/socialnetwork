import {v1} from "uuid";
import {ActionsType, DialogPageType} from "./state.js";

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