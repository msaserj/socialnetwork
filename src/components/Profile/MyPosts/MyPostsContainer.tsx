import React from "react";
import {addPostOnClickAC, PostType, newPostTextOnChangeAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}
type mapDispatchToPropsType = {
    newPostTextOnChange: (text: string) => void
    addPostOnClick: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newTextState
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        newPostTextOnChange: (text: string)=>{
            let action = newPostTextOnChangeAC(text)
            dispatch(action)
        },
        addPostOnClick: ()=>{
            dispatch(addPostOnClickAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)