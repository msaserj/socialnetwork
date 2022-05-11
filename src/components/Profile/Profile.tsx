import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {

    return(
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}