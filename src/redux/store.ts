import {v1} from "uuid";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";


/// PROFILE
export type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}
/// DIALOGS
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
export type SidebarType = {}

/// ROOT STORE
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    subscribe: (callBack: () => void) => void
    _onChange: (_state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

// ACTIONS
export type ActionsType = DialogsActionsType | ProfileActionsType

/// STORE
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi", likesCount: 5},
                {id: v1(), message: "How is your it-kamasutra", likesCount: 6},
                {id: v1(), message: "Yo", likesCount: 10},
            ],
            newTextState: ""
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    subscribe(callBack) {
        this._onChange = callBack
    },
    _onChange() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) { // {type: "ADD-POST"}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange(this._state)
    }
}