import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export const Profile = () => {

    return (
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}