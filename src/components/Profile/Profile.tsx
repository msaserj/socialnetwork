import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchStoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    dispatch: DispatchStoreType
    newPostText: string
}

export const Profile = (props: ProfilePageType) => {

    return(
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}