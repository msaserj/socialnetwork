import {ActionsType, AppThunk} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

// typeof ActionCreators
export type AppActionsType =
    | ReturnType<typeof initialAC>

// ActionCreators
export const initialAC = (initialized: boolean) => ({type: "SET-INITIALIZED", initialized} as const)


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
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

// thunk


export const initializeTC = (): AppThunk => async (dispatch) => {
    await dispatch( getAuthUserDataTC() )
    dispatch(initialAC(true))
}


