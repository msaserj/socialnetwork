import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";


export type ProfileType = {
    userProfile: UserProfileType | null
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    isOwner: boolean
}

export const Profile = (props: ProfileType) => {
    if (!props.isAuth) return <Navigate to="/login" />
    return (
        <div>
            <h2>Main content</h2>
            <ProfileInfo
                status={props.status}
                updateStatus={props.updateStatus}
                getStatus={props.getStatus}
                userProfile={props.userProfile}
                isOwner={props.isOwner}
            />
            <MyPostsContainer  />
        </div>
    )
}