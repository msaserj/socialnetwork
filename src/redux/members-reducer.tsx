import {ActionsType, AppThunk} from "./redux-store";
import {usersAPI} from "../api/api";

// typeof ActionCreators
export type MembersActionsType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof toggleIsFetchingAC>

// Actions
const SET_USERS = 'sn/members/SET-USERS'
const TOGGLE_IS_FETCHING = 'sn/members/TOGGLE-IS-FETCHING'


// ActionCreators
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

// types for InitialState
export type UserLocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export type UsersPageType = {
    users: Array<UserType>
    isFetching: boolean
}
const initialState: UsersPageType = {
    users: [],
    isFetching: false
}

// reducer
export const membersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

//thunks
export const getMembersTC = (): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let data = await usersAPI.getMembers(1,6)
    console.log(data)
    dispatch(setUsersAC(data.items))
    dispatch(toggleIsFetchingAC(false))
}
