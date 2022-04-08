import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";



export const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea>Add post</textarea></div>
                <div><button>Add post</button></div>
                <div className={classes.item}>
                    New Post
                </div>
                <div className={classes.item}>
                    <Post message="hi, how are you?" likes="15" />
                    <Post message="It`s my first post." likes="6" />
                </div>
            </div>
        </div>
    )
}