import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import {AppStateType, DispatchStoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

export type postsType = {
    id: string
    message: string
    likesCount: number
}
type MyPostsStateType = {
    dispatch: DispatchStoreType
    state: AppStateType
}

export const MyPostsContainer = (props: MyPostsStateType) => {
    let state = props.state.profilePage
    const addPost = () => {
       props.dispatch(addPostAC(state.newTextState))

    }
    function onPostChange(text: string) {
        let action = updateNewPostAC(text)
       props.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPostHandler={addPost}
                 posts={state.posts}
                 newPostText={state.newTextState}/>
    )
}