import {v1} from "uuid";
import {ActionsType, AppThunk, RootState} from "./redux-store";
import {profileAPI} from "../api/api";

// typeof ActionCreators
export type ProfileActionsType =
    | ReturnType<typeof addPostOnClickAC>
    | ReturnType<typeof newPostTextOnChangeAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoAC>
    | ReturnType<typeof setResultCodeAC>

// ActionCreators
export const addPostOnClickAC = () => ({type: "ADD-POST"} as const)
export const newPostTextOnChangeAC = (newPostText: string) => ({type: "UPDATE-NEW-POST-TEXT", newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusAC = (status: string) => ({type: "SET-STATUS", status} as const)
export const savePhotoAC = (photoFile: any) => ({type: "SET-PHOTO", photoFile} as const)
export const setResultCodeAC = (code: number) => ({type: "SET-RESULT-CODE", code} as const)
export const deletePostAC = (postId: string) => ({type: "DELETE-POST", postId} as const)

// types for InitialState
export type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
    userProfile: UserProfileType
    status: string
    resultCode: number
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type UserProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: UserContactsProfileType
    photos: UserPhotosProfileType

}
type UserContactsProfileType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type UserPhotosProfileType = {
    small: string
    large: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 5},
        {id: v1(), message: "How is your it-kamasutra", likesCount: 6},
        {id: v1(), message: "Yo", likesCount: 10},
    ],
    newTextState: "",
    userProfile: {} as UserProfileType,
    status: "",
    resultCode: 1
}


// reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        //onClick
        case "ADD-POST":
            return {
                ...state,
                newTextState: "",
                posts: [{id: v1(), message: state.newTextState, likesCount: 5}, ...state.posts]
            }
        //onChange
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newTextState: action.newPostText}
        case "SET-STATUS":
            return {...state, status: action.status}
        case "SET-PHOTO":
            return {...state, userProfile: {...state.userProfile, photos: action.photoFile}}
        case "SET-USER-PROFILE":
            return {...state, userProfile: action.profile}
        case "SET-RESULT-CODE":
            return {...state, resultCode: action.code}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

// thunk
export const getUserProfileTC = (profileId: number): AppThunk => async (dispatch) => {
    let res = await profileAPI.getProfile(profileId)
    dispatch(setUserProfile(res.data))
}

export const getStatusTC = (profileId: string): AppThunk => async (dispatch) => {
    let res = await profileAPI.getStatus(profileId)
    // console.log(res.data)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    try {
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(res.data))
        }
    } catch (err) {
        alert(err)
    }
}
export const savePhotoTC = (photoFile: any): AppThunk => async (dispatch) => {
    let res = await profileAPI.savePhoto(photoFile)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoAC(res.data.photos))
    }
}
export const saveProfileTC = (profile: UserProfileType, setStatus: any, setSubmitting: any): AppThunk =>
    async (dispatch, getState: () => RootState) => {
    const myId = getState().auth.data.id
    console.log("myid", myId)
    console.log("profile", profile)
    let res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfileTC(myId))
        dispatch(setResultCodeAC(0))
    } else {
        dispatch(setResultCodeAC(1))
        setStatus(res.messages)
        return await Promise.reject(res.data.message[0])
    }
    setSubmitting(false);
}
