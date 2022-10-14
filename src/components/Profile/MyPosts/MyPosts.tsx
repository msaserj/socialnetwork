import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";


type MyPostType = {
    newPostTextOnChange: (newPostText: string) => void
    addPostOnClick: () => void
    profilePage: ProfilePageType
}

export class MyPosts extends React.PureComponent<MyPostType> {
    // PureComponent as shouldComponentUpdate
    // but for functional component use HOC React.memo() -> wrap in this hoc your component

    // shouldComponentUpdate(nextProps: Readonly<MyPostType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return  nextProps !== this.props || nextState !== this.state
    // }

    render() {
        console.log("MyPosts render")
        let postsElements = this.props.profilePage.posts.map(el => <Post id={el.id} message={el.message}
                                                                         likesCount={el.likesCount}/>)
        const postOnClickHandler = () => {
            this.props.addPostOnClick()
        }
        const postOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            // props.dispatch(updateNewPostAC(e.currentTarget.value))
            this.props.newPostTextOnChange(e.currentTarget.value)
        }

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={postOnChangeHandler}
                                  value={this.props.profilePage.newTextState}>Add post</textarea>
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
}