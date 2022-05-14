import {v1} from "uuid";


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
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    subscribe: (callBack: () => void) => void
    _rerenderEntireTree: () => void
    getState: ()=> RootStateType
}

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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree()
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: v1(),
            message: postText,
            likesCount: 5
        };
        this._state.profilePage.posts.push(newPost)
        this._rerenderEntireTree();
    },
    subscribe(callBack) {
        this._rerenderEntireTree = callBack
    },
    _rerenderEntireTree() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    }
}