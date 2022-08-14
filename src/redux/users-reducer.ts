import {v1} from "uuid";
import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

// ActionCreators
export const followAC = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: "SET-TOTAL-USERS-COUNT", totalCount} as const)


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
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: false,
            name: "Alex",
            status: "Loking for a job",
            location: {city: "Tagil", country: "Russia"}
        },
        {
            id: v1(),
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Nikolai",
            status: "I flying in the clouds",
            location: {city: "E-burg", country: "Russia"}
        },
        {
            id: v1(),
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Lisa",
            status: "At home",
            location: {city: "Tver", country: "Russia"}
        },
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2
}

// reducer
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
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
            } as UsersPageType
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((usr: { id: string; }) => {
                    if (usr.id === action.userId) {
                        return {...usr, followed: false}
                    }
                    return usr;
                })
            } as UsersPageType
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}