import {ActionsType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

// typeof ActionCreators
export type AppActionsType =
    | ReturnType<typeof initialAC>

// ActionCreators
export const initialAC = () => ({type: "SET-INITIALIZED"} as const)

// types for InitialState
export type AppType = {
    initialized: boolean
}

const initialState: AppType = {
    initialized: false
}
// reducer
export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

// thunk


export const initializeTC = () => async (dispatch: any) => {
    await dispatch( getAuthUserDataTC() )
    await dispatch( initialAC() )
}


