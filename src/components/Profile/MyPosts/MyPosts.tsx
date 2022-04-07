import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>Add post</textarea>
                <button>Add post</button>
                <div className={classes.item}>
                    New Post
                </div>
                <div className={classes.item}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}