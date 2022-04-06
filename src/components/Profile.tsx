import React from "react";
import classes from './Profile.module.css'

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
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>

                </div>
            </div>
        </div>
    )
}