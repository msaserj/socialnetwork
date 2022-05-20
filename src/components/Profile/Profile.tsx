import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/state.js";


type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPost: string
    newText: string
}


export const Profile = (props: ProfilePageType) => {
    const addPostHandler = (postName: string) => {
        // props.addPostCallBack(postName);
        props.dispatch({type: "ADD-POST", newPost: props.newPost})
    }


    function onPostChange(newText: string) {
        // props.updateNewPostTextCallBack(newText)
       props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: props.newText})

    }

    return(
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPostCallBack={addPostHandler}
                     updateNewPostText={onPostChange}
                     newPostText={props.newPost}/>
        </div>
    )
}