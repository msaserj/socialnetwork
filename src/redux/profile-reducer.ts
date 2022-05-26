import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./store";


type PostType = {
    id: string
    message: string
    likesCount: number
}

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

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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
            state.newTextState = action.newPostText;
            return state
        default:
            return state
    }

}