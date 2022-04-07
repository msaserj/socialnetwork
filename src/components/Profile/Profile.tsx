import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

export const Profile = () => {
    return(
        <div>
            <h2>Main content</h2>
            <div>
                <img className={classes.bgc} src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg" alt="la_batie"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}