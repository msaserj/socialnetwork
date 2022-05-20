import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, updateNewPostAC} from "../../../redux/state.js";


type postType = {
    id: string
    message: string
    likesCount: number
}
type AppStateType = {
    posts: Array<postType>
    // addPostCallBack: (postName: string) => void
    updateNewPostText: (postName: string) => void
    newPostText: string
    newPost: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: AppStateType) => {
    let postsElements = props.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPost))
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostAC(props.newPostText))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}>Add post</textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
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





// const addPost = (postName: string) => {
//     // props.addPostCallBack(postName);
//     props.dispatch({type: "ADD-POST", newPost: props.newPost})
// }
//
//
// function onPost(newText: string) {
//     // props.updateNewPostTextCallBack(newText)
//     props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: props.newText})
//
// }
