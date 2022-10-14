import {ActionsType} from "./redux-store";
import {authAPI} from "../api/api";

// typeof ActionCreators
export type AuthActionsType =
    | ReturnType<typeof setAuthData>
    | ReturnType<typeof resetAuthDataAC>
    | ReturnType<typeof setIsAuth>

// ActionCreators
export const setAuthData = (payload: AuthType) => ({type: "SET-USER-DATA", payload} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "SET-IS-AUTH", isAuth} as const)

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
            return {...state, ...action.payload}
        case "SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}

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
export const getAuthUserDataTC = () => async (dispatch: any) => {
    let data = await authAPI.me()
    dispatch(setIsAuth(true))
    if (data.resultCode === 0) {
        dispatch(setAuthData(data))
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, setStatus: any, setSubmitting: any) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        setStatus(data.messages)
    }
    setSubmitting(false);
}


export const logoutTC = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(resetAuthDataAC())
    }
}

