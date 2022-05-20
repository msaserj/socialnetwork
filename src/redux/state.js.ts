import {v1} from "uuid";
import app from "../App";


type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (callBack: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType ={
    type: "ADD-POST"
    newPost: string
}
type UpdateNewPostTextType ={
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi", likesCount: 5},
                {id: v1(), message: "How is your it-kamasutra", likesCount: 6},
                {id: v1(), message: "Yo", likesCount: 10},
                {id: v1(), message: "Yo", likesCount: 20},
                {id: v1(), message: "Yo", likesCount: 30}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Serj"},
                {id: v1(), name: "Alex"},
                {id: v1(), name: "Petr"},
                {id: v1(), name: "Valera"},
                {id: v1(), name: "Viktor"},
                {id: v1(), name: "Valera"}
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How is your it-kamasutra"},
                {id: v1(), message: "Yo1"},
                {id: v1(), message: "Yo2"},
                {id: v1(), message: "Yo3"},
            ]
        },
        sidebar: {}
    },

    subscribe(callBack) {
        this._onChange = callBack
    },
    _onChange() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) { // {type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: v1(),
                message: action.newPost,
                likesCount: 5
            };
            this._state.profilePage.posts.push(newPost)
            this._onChange();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()
        }
    }
}