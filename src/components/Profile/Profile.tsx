import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppStateType, DispatchStoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePageType = {
    dispatch: DispatchStoreType
    state: AppStateType
}

export const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <h2>Main content</h2>
            <ProfileInfo/>
            <MyPostsContainer
                dispatch={props.dispatch}
                state={props.state}
            />
        </div>
    )
}