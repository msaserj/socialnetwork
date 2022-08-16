import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type AuthActionsType =
    | ReturnType<typeof setAuthData>

// ActionCreators
export const setAuthData = (data: AuthType) => ({type: "SET-USER-DATA", data} as const)

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
            return {...state, ...action.data}
        default:
            return state
    }
}