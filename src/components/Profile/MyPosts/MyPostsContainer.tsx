import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
    //posts: Array<PostType>,
    //newPostText: string
}
type mapDispatchToPropsType = {
    //updateTextNewMessage: (text: string) => void
    //addMessageHandler: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newTextState
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateTextNewMessage: (text: string)=>{
            let action = updateNewPostAC(text)
            dispatch(action)
        },
        addMessageHandler: ()=>{
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)