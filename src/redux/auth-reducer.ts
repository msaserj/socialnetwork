import {ActionsType, AppThunk} from "./redux-store";
import {authAPI, ResultCodeEnum, securityAPI} from "../api/api";
import {Dispatch} from "redux";

// typeof ActionCreators
export type AuthActionsType =
    | ReturnType<typeof setAuthData>
    | ReturnType<typeof resetAuthDataAC>
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof getCaptchaAC>

// Actions
const SET_USER_DATA = 'sn/auth/SET-USER-DATA'
const SET_IS_AUTH = 'sn/auth/SET-IS-AUTH'
const GET_CAPTCHA = 'sn/auth/GET-CAPTCHA'
const REST_USER_AUTH_DATA = 'sn/auth/RESET-USER-AUTH-DATA'

// ActionCreators
export const setAuthData = (payload: AuthType) => ({type: SET_USER_DATA, payload} as const)
export const setIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth} as const)
export const getCaptchaAC = (captcha: string | null) => ({type: GET_CAPTCHA, captcha} as const)

export const resetAuthDataAC = () => ({type: REST_USER_AUTH_DATA} as const)

// types for InitialState
export type AuthType = {
    data: DataType
    messages: string[]
    fieldsErrors?: []
    resultCode: number
    isAuth?: boolean
    captcha?: string | null
}

export type DataType = {
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
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        case GET_CAPTCHA:
            return {...state, captcha: action.captcha}
        case REST_USER_AUTH_DATA:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

// thunk
export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let data = await authAPI.me()
    dispatch(setIsAuth(true))
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthData(data))
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: any, setSubmitting: any): AppThunk => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        await dispatch(getAuthUserDataTC())
    } else {
        if (data.resultCode === ResultCodeEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaTC())
        }
        setStatus(data.messages)
    }
    setSubmitting(false);
}


export const logoutTC = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(resetAuthDataAC())
    }
}


export const getCaptchaTC = (): AppThunk => async (dispatch) => {
    let res = await securityAPI.getCaptcha()
    const captchaUrl = res.url
    dispatch(getCaptchaAC(captchaUrl))
}

