import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


export type ProfileType = {
    userProfile: UserProfileType | null
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <h2>Main content</h2>
            <ProfileInfo    userProfile={props.userProfile}/>
            <MyPostsContainer  />
        </div>
    )
}