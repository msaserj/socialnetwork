import {ActionsType} from "./redux-store";
import {authAPI} from "../api/api";

// typeof ActionCreators
export type AuthActionsType =
    | ReturnType<typeof setAuthData>
    | ReturnType<typeof resetAuthDataAC>

// ActionCreators
export const setAuthData = (payload: AuthType) => ({type: "SET-USER-DATA", payload} as const)
export const resetAuthDataAC = () => ({type: "RESET-USER-AUTH-DATA"} as const)

// types for InitialState
export type AuthType = {
    data: DataType
    messages: []
    fieldsErrors: []
    resultCode: number

    isAuth: boolean
}

type DataType = {
    id: number
    login: string
    email: string
}


const initialState: AuthType = {
    data: {id: 0, login: "", email: ""},
    messages: [],
    fieldsErrors: [],
    resultCode: 0,

    isAuth: false
}
// reducer
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload, isAuth: true}
        case "RESET-USER-AUTH-DATA":
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

// thunk
export const getAuthUserDataTC = () => {
    return (dispatch: any) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(data))
            }
        })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else if (data.resultCode === 10){

            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch: any) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(resetAuthDataAC())
            }
        })
    }
}

