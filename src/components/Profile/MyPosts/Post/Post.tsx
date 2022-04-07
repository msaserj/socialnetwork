import React from "react";
import classes from './Post.module.css'

export const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://cabinet.miem.hse.ru/public-api/user/7/avatar" alt="ava"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}