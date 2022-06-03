import {v1} from "uuid";
import {ActionsType} from "./redux-store";



export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>
export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost: newPost
    } as const
}
export const updateNewPostAC = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

export type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 5},
        {id: v1(), message: "How is your it-kamasutra", likesCount: 6},
        {id: v1(), message: "Yo", likesCount: 10},
    ],
    newTextState: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(),
                message: action.newPost,
                likesCount: 5
            };
            state.newTextState = ""
            state.posts.push(newPost)
            return state
        case "UPDATE-NEW-POST-TEXT":
            // state.newTextState = action.newPostText;
            return {...state, newTextState:action.newPostText}
        default:
            return state
    }

}