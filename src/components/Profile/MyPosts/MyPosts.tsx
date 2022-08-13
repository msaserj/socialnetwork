import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";




type AppStateType = {
    updateNewPostText: (newPostText: string) => void
    addPostHandler: () => void
    profilePage: ProfilePageType
    //posts: Array<PostType>
    //newPostText: string
}

export const MyPosts = (props: AppStateType) => {

    let postsElements = props.profilePage.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

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
                    <textarea onChange={onPostChange} value={props.profilePage.newTextState}>Add post</textarea>
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