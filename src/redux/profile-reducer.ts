import {v1} from "uuid";
import {ActionsType} from "./redux-store";



export type ProfileActionsType = ReturnType<typeof addPostOnClickAC> | ReturnType<typeof newPostTextOnChangeAC>

export const addPostOnClickAC = () => {
    return {
        type: "ADD-POST",
        //newPost: newPost
    } as const
}
export const newPostTextOnChangeAC = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

export type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
}
export type PostType = {
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
        //onClick
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(),
                message: state.newTextState,
                likesCount: 5
            };
            state.newTextState = ""
            state.posts.unshift(newPost)
            return state
        //onChange
        case "UPDATE-NEW-POST-TEXT":
            // state.newTextState = action.newPostText;
            return {...state, newTextState:action.newPostText}
        default:
            return state
    }

}