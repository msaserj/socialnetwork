import React from "react";
import classes from './MyPosts.module.css'
import {MessageType, Post} from "./Post/Post";
import {v1} from "uuid";



export const MyPosts = () => {

    const post: Array<MessageType>  = [
        {id: v1(), message: "Hi", likesCount: 5},
        {id: v1(), message: "How is your it-kamasutra", likesCount: 6},
        {id: v1(), message: "Yo", likesCount: 10},
        {id: v1(), message: "Yo", likesCount: 20},
        {id: v1(), message: "Yo", likesCount: 30}
    ]
    let postsElements = post.map(el=> <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} /> )
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>Add post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.item}>
                    <h3>New Post</h3>
                </div>
                <div className={classes.item}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}