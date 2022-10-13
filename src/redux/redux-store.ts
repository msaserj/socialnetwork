import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {AppActionsType, appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer ,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchStoreType = typeof store.dispatch



export type ActionsType =
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AuthActionsType
    | AppActionsType

// @ts-ignore
window.store = store;