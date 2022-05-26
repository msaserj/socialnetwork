import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./state.js";

type PostType = {
    id: string
    message: string
    likesCount: number
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