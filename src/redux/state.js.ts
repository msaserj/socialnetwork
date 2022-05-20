import {v1} from "uuid";

/// PROFILE
type ProfilePageType = {
    posts: Array<PostType>
    newTextState: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}
/// DIALOGS
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
type SidebarType = {}

/// ROOT STORE
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
    updateNewPostText: (newPostText: string) => void
}

/// ACTIONS
export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>
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
/// STORE
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
            newTextState: ""
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
    updateNewPostText(newPostText) {
        this._state.profilePage.newTextState = newPostText;
        this._onChange()
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
            this._state.profilePage.newTextState = action.newPostText;
            this._onChange()
        }
    }
}