import React from "react";
import classes from './Post.module.css'

export type MessageType = {
    id: number
    message: string
    likesCount: number
}


export const Post = (props: MessageType) => {
    return (
        <div className={classes.item}>
            <img src="https://cabinet.miem.hse.ru/public-api/user/7/avatar" alt="ava"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}