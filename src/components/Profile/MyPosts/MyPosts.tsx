import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


type postType = {
    id: string
    message: string
    likesCount: number
}


type AppStateType = {
    posts: Array<postType>

}

export const MyPosts = (props: AppStateType) => {


    // Post!!!
    // @ts-ignore
    let postsElements = props.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )
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