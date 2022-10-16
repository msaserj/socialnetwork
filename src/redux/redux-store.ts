import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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


// для работы с REDUX_DEVTOOLS: Window c Большой Буквы Window
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchStoreType = typeof store.dispatch



export type ActionsType =
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AuthActionsType
    | AppActionsType

// @ts-ignore
// window.store = store;