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
    | ReturnType<typeof editProfileAC>

// Actions

// Actions
const ADD_POST = 'sn/profile/ADD-POST'
const UPDATE_NEW_POST_TEXT = 'sn/profile/UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'sn/profile/SET-USER-PROFILE'
const SET_STATUS = 'sn/profile/SET-STATUS'
const SET_PHOTO = 'sn/profile/SET-PHOTO'
const SET_RESULT_CODE = 'sn/profile/SET-RESULT-CODE'
const DELETE_POST = 'sn/profile/DELETE-POST'
const EDIT_PROFILE = 'sn/profile/EDIT-PROFILE'

// ActionCreators
export const addPostOnClickAC = () => ({type: ADD_POST} as const)
export const newPostTextOnChangeAC = (newPostText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoAC = (photoFile: any) => ({type: SET_PHOTO, photoFile} as const)
export const setResultCodeAC = (code: number) => ({type: SET_RESULT_CODE, code} as const)
export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)
export const editProfileAC = (edit: boolean) => ({type: EDIT_PROFILE, edit} as const)

// types for InitialState
export type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
    userProfile: UserProfileType
    status: string
    resultCode: number
    edit: boolean
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
export type UserPhotosProfileType = {
    small: string | null
    large: string | null
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
    resultCode: 1,
    edit: false,
}

// reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        //onClick
        case ADD_POST:
            return {
                ...state,
                newTextState: "",
                posts: [{id: v1(), message: state.newTextState, likesCount: 5}, ...state.posts]
            }
        //onChange
        case UPDATE_NEW_POST_TEXT:
            return {...state, newTextState: action.newPostText}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PHOTO:
            return {...state, userProfile: {...state.userProfile, photos: action.photoFile}}
        case SET_USER_PROFILE:
            return {...state, userProfile: action.profile}
        case SET_RESULT_CODE:
            return {...state, resultCode: action.code}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case EDIT_PROFILE:
            return {...state, edit: action.edit}
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
        console.log("profile", err)
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
    let res = await profileAPI.saveProfile(profile)
    if (res.resultCode === 0) {
        dispatch(editProfileAC(false))
        dispatch(getUserProfileTC(myId))
        dispatch(setResultCodeAC(0))
    }
    else {
        dispatch(setResultCodeAC(1))
        setStatus(res.messages)
        return await Promise.reject(res.message[0])
    }
    setSubmitting(false);
}
