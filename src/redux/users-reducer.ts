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
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)


// types for InitialState

export type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
}



const initialState: UsersPageType = {
    users: [
        {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: false, fullName: "Alex", status: "Loking for a job", location: {city: "Tagil", country: "Russia"}},
        {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: true, fullName: "Nikolai", status: "I flying in the clouds", location: {city: "E-burg", country: "Russia"}},
        {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: true, fullName: "Lisa", status: "At home", location: {city: "Tver", country: "Russia"}},
        {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: false, fullName: "Katya", status: "freedom", location: {city: "Tambov", country: "Russia"}},
    ]
}

// reducer
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return <UsersPageType>{
                ...state,
                users: state.users.map((usr: { id: string; }) => {
                    if (usr.id === action.userId) {
                        return {...usr, followed: true}
                    }
                    return usr;
                })
            }
        case "UNFOLLOW":
            return <UsersPageType>{
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