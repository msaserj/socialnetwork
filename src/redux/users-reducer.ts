import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

// ActionCreators
export const followAC = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: any) => ({type: "SET-USERS", users} as const)


// types for InitialState

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string,
    followed: boolean
    fullName: string,
    status: string,
    location: LocationType
}

export type UsersPageType = {
    users: Array<UsersType>
}


const initialState: UsersPageType = {
    users: [
        {id: v1(), followed: false, fullName: "Alex", status: "Loking for a job", location: {city: "Tagil", country: "Russia"}},
        {id: v1(), followed: true, fullName: "Nikolai", status: "I flying in the clouds", location: {city: "E-burg", country: "Russia"}},
        {id: v1(), followed: true, fullName: "Evgeniy", status: "It's my status", location: {city: "Moscow", country: "Russia"}},
        {id: v1(), followed: true, fullName: "Lisa", status: "At home", location: {city: "Tver", country: "Russia"}},
        {id: v1(), followed: false, fullName: "Katya", status: "freedom", location: {city: "Tambov", country: "Russia"}},
    ]
}

// reducer
export const usersReducer = (state: any = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((usr: { id: string; }) => {
                    if (usr.id === action.userId) {
                        return {...usr, followed: true}
                    }
                    return usr;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((usr: { id: string; }) => {
                    if (usr.id === action.userId) {
                        return {...usr, followed: false}
                    }
                    return usr;
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}