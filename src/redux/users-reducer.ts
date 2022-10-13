import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";

// typeof ActionCreators
export type UsersActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>

// ActionCreators
export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: "SET-TOTAL-USERS-COUNT", totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleIsFollowing = (isFetching: boolean, userId: number) => (
    {type: "TOGGLE-IS-FOLLOWING", isFetching, userId} as const)


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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}


const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: false,
            name: "Alex",
            status: "Loking for a job",
            location: {city: "Tagil", country: "Russia"}
        },
        {
            id: 2,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Nikolai",
            status: "I flying in the clouds",
            location: {city: "E-burg", country: "Russia"}
        },
        {
            id: 3,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Lisa",
            status: "At home",
            location: {city: "Tver", country: "Russia"}
        },
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: []
}

// reducer
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((usr: { id: number }) => {
                    if (usr.id === action.userId) {
                        return {...usr, followed: true}
                    }
                    return usr;
                })
            } as UsersPageType
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((usr: { id: number }) => {
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
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            } as UsersPageType
        default:
            return state
    }
}

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const followTC = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}
export const unFollowTC = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.unFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}