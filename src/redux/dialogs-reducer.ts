import {ActionsType, AppThunk} from "./redux-store";
import {dialogAPI} from "../api/api";

// typeof ActionCreators
export type DialogsActionsType =
    | ReturnType<typeof newTextMessageOnChange>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setDialogsAC>
    | ReturnType<typeof putDialogAC>
    | ReturnType<typeof setMessagesListAC>

// Actions
const UPDATE_NEW_MESSAGE_TEXT = 'sn/dialogs/UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'sn/dialogs/SEND-MESSAGE'
const SET_DIALOGS = 'sn/dialogs/SET-DIALOGS'
const PUT_DIALOG = 'sn/dialogs/PUT-DIALOG'
const SET_MESSAGES_LIST = 'sn/dialogs/SET-MESSAGES-LIST'

// ActionCreators
export const newTextMessageOnChange = (newMessage: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage} as const
}
export const sendMessageAC = (message: string) => ({type: SEND_MESSAGE, message} as const)

export const setDialogsAC = (dialogs: Array<DialogsType>) => ({type: SET_DIALOGS, dialogs: dialogs} as const)
export const setMessagesListAC = (messages: MessageItemType[]) => ({type: SET_MESSAGES_LIST, messages} as const)
export const putDialogAC = (userId: number) => ({type: PUT_DIALOG, userId} as const)

// types for InitialState



export type DialogsType = {
    id: number;
    userName: string;
    hasNewMessages: boolean;
    lastDialogActivityDate: Date;
    lastUserActivityDate: Date;
    newMessagesCount: number;
    photos: Photos;
}
export interface Photos {
    small: string;
    large: string;
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: MessageItemType[]
    newMessageState: string
    userId: number

    totalCount: number;
    error?: any;
}

export type MessageType = {
    data: {} ;
    messages: any[];
    fieldsErrors: any[];
    resultCode: number;

}

export type MessageItemType = {
    id: string;
    body: string;
    translatedBody?: any;
    addedAt: Date;
    senderId: number;
    senderName: string;
    recipientId: number;
    viewed: boolean;
}



// init state
const initialState: DialogPageType = {
    dialogs: [],
    messages: [],
    newMessageState: "",
    userId: 0,
    error: null,
    totalCount: 0
}
console.log("asa", initialState.dialogs)

// reducer
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        //onClick
        case  SEND_MESSAGE:
            return {
                ...state,
                // newMessageState: "",
                messages: {...state.messages}
            };
        //onChange
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageState: action.newMessage}
        case SET_DIALOGS:
            return {...state, dialogs: action.dialogs}
        case SET_MESSAGES_LIST:
            return {...state, messages: action.messages }
        case PUT_DIALOG:
            return {...state, userId: action.userId}
        default:
            return state
    }
}

//thunks
export const getDialogsTC = (): AppThunk => async (dispatch) => {
    // dispatch(toggleIsFetchingAC(true));
    let data = await dialogAPI.getDialogs()
    dispatch(setDialogsAC(data.data))
    // dispatch(toggleIsFetchingAC(false))
}

export const putDialogTC = (userId: number): AppThunk => async (dispatch) => {
    // dispatch(toggleIsFetchingAC(true));
    let data = await dialogAPI.putDialog(userId)
    // dispatch(putDialogAC(data.data))
    // dispatch(toggleIsFetchingAC(false))
}

export const sendMessageTC = (userId: number, messageBody: string): AppThunk => async (dispatch) => {
    // dispatch(toggleIsFetchingAC(true));
    let data = await dialogAPI.sendMessage(userId, messageBody)
    dispatch(sendMessageAC(data.data))
    console.log("sendMessage", data)
    // dispatch(toggleIsFetchingAC(false))
}
export const getMessagesListTC = (userId: number): AppThunk => async (dispatch) => {
    // dispatch(toggleIsFetchingAC(true));
    let data = await dialogAPI.getMessagesList(userId)
    dispatch(setMessagesListAC(data.data.items))
    dispatch(putDialogAC(userId))
    console.log("getListMessages", data.data.items)
    // dispatch(toggleIsFetchingAC(false))
}




// const initialState: DialogPageType = {
//     dialogs: [
//         {id: v1(), name: "Serj"},
//         {id: v1(), name: "Alex"},
//         {id: v1(), name: "Petr"},
//         {id: v1(), name: "Valera"},
//         {id: v1(), name: "Viktor"},
//         {id: v1(), name: "Valera"}
//     ],
//     messages: [
//         {id: v1(), message: "Hi"},
//         {id: v1(), message: "How is your it-kamasutra"},
//         {id: v1(), message: "Yo1"},
//         {id: v1(), message: "Yo2"},
//         {id: v1(), message: "Yo3"},
//     ],
//     newMessageState: ""
// }

// type DialogType = {
//     id: string
//     name: string
// }

// type MessageType = {
//     id: string
//     message: string
// }