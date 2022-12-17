import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {AppActionsType, appReducer} from "./app-reducer";
import {ChatActionsType, chatReducer} from "./chat-reducer";
import {MembersActionsType, membersReducer} from "./members-reducer";
import {myProfileActionsType, myProfileReducer} from "./myProfile-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    members: membersReducer,
    myProfile: myProfileReducer
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

export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>

export type ActionsType =
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AuthActionsType
    | AppActionsType
    | ChatActionsType
    | MembersActionsType
    | myProfileActionsType


