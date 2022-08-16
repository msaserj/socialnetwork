import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";


type MyPostType = {
    newPostTextOnChange: (newPostText: string) => void
    addPostOnClick: () => void
    profilePage: ProfilePageType
}

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.profilePage.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

    const postOnClickHandler = () => {
        props.addPostOnClick()
    }
    const postOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(updateNewPostAC(e.currentTarget.value))
        props.newPostTextOnChange(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={postOnChangeHandler} value={props.profilePage.newTextState}>Add post</textarea>
                </div>
                <div>
                    <button onClick={postOnClickHandler}>Add post</button>
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