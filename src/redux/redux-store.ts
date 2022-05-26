import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer ,
    dialogsPage: dialogsReducer
})


export let store = createStore(reducers)
//export const dispatch = store.dispatch


export type AppStoreType = ReturnType<typeof reducers>
export type DispatchStoreType = typeof store.dispatch

export type ActionsType = DialogsActionsType | ProfileActionsType

