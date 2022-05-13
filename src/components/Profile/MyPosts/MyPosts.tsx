import React, { useRef} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


type postType = {
    id: string
    message: string
    likesCount: number
}
type AppStateType = {
    posts: Array<postType>
    addPost: (postName: string) => void
}

type MessageType = {
    message: string
    addPostCallBack: (postText: string) => void
}


export const MyPosts = (props: AppStateType) => {

    let postsElements = props.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = (props: MessageType) => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>Add post</textarea>
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

