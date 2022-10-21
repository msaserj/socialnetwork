import {ActionsType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";

// typeof ActionCreators
export type AuthActionsType =
    | ReturnType<typeof setAuthData>
    | ReturnType<typeof resetAuthDataAC>
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof getCaptchaAC>

// ActionCreators
export const setAuthData = (payload: AuthType) => ({type: "SET-USER-DATA", payload} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "SET-IS-AUTH", isAuth} as const)
export const getCaptchaAC = (captcha: string | null) => ({type: "GET-CAPTCHA", captcha} as const)

export const resetAuthDataAC = () => ({type: "RESET-USER-AUTH-DATA"} as const)

// types for InitialState
export type AuthType = {
    data: DataType
    messages: []
    fieldsErrors: []
    resultCode: number

    isAuth: boolean
    captcha: string | null
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

    isAuth: false,
    captcha: null
}
// reducer
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        case "SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        case "GET-CAPTCHA":
            return {...state, captcha: action.captcha}

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


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: any, setSubmitting: any) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaTC())
        }
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


export const getCaptchaTC = () => async (dispatch: any) => {
    let res = await securityAPI.getCaptcha()
    const captchaUrl = res.url
    dispatch(getCaptchaAC(captchaUrl))
}

