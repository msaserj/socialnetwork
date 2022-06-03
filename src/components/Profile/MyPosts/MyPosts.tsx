import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


type postType = {
    id: string
    message: string
    likesCount: number
}
type AppStateType = {
    posts: Array<postType>
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    addPostHandler: () => void
}

export const MyPosts = (props: AppStateType) => {

    let postsElements = props.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

    const onAddPost = () => {
        props.addPostHandler()
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        // props.dispatch(updateNewPostAC(e.currentTarget.value))
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}>Add post</textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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