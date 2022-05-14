import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state.js";

// import {addPost} from "../../redux/state.js";

type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    addPostCallBack: (message: string)=> void
    updateNewPostTextCallBack: (message: string)=> void
}


export const Profile = (props: ProfilePageType) => {
    const addPostHandler = (postName: string) => {
        addPost(postName);
    }


    function onPostChange(newText: string) {
        updateNewPostText(newText)
    }

    return(
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostCallBack={addPostHandler} updateNewPostText={onPostChange} newPostText={props.newPostText}/>
        </div>
    )
}