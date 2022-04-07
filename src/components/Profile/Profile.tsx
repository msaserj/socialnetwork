import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return(
        <div className={classes.content}>
            <h2>Main content</h2>
            <div>
                <img src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg" alt="la_batie"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}