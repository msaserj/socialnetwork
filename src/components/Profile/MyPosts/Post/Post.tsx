import React from "react";
import classes from './Post.module.css'

type MessageType = {
    message: string
    likes: string
}

export const Post = (props: MessageType) => {
    return (
        <div className={classes.item}>
            <img src="https://cabinet.miem.hse.ru/public-api/user/7/avatar" alt="ava"/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}