import React from "react";
import {addPostOnClickAC, newPostTextOnChangeAC, ProfilePageType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
    profilePage: ProfilePageType
}
type mapDispatchToPropsType = {
    newPostTextOnChange: (text: string) => void
    addPostOnClick: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
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