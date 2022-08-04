import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import {DispatchStoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type postType = {
    id: string
    message: string
    likesCount: number
}
type AppStateType = {
    posts: Array<postType>
    newPostText: string
    dispatch: DispatchStoreType
}

export const MyPostsContainer = (props: AppStateType) => {
    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }
    function onPostChange(text: string) {
        let action = updateNewPostAC(text)
        props.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPostHandler={addPost}
                 posts={props.posts}
                 newPostText={props.newPostText}/>
    )
}