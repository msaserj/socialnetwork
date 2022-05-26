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
    newPostText: string
}

export const Profile = (props: ProfilePageType) => {

    return(
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}