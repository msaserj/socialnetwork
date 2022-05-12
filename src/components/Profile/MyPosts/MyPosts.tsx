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

}



export const MyPosts = (props: AppStateType) => {


    // Post!!!

    let postsElements = props.posts.map(el=> <Post id={el.id} message={el.message} likesCount={el.likesCount} /> )

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
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
                    <button onClick={addPost}>Add post</button>
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

