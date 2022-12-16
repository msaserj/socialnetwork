import React from 'react';
import css from "./ProfileWidget.module.scss"
import {useAppSelector} from "../../../../hooks/hooks";

type ProfileWidgetType = {}


export const ProfileWidget: React.FC<ProfileWidgetType> = () => {
    const avatar = useAppSelector(state => state.profilePage.userProfile.photos)
    const name = useAppSelector(state => state.profilePage.userProfile.fullName)

    return (
        <div className={css.sideProfile}>
            <div className={css.profileCover}>
            </div>
            <div className={css.profileContent}>
                <div className={css.profileBlock}>
                    <img className={css.ava} src={avatar? avatar.small : ""} alt=""/>
                    <h3 className={css.name}>{name}</h3>
                </div>

                <ul className={css.profileMenu}>
                    <h3>My Profile</h3>
                    <li>Stream</li>
                    <li>About</li>
                    <li>Preferences</li>
                </ul>
                <ul className={css.profileMenu}>
                    <h3>My Profile</h3>
                    <li>Activity</li>
                    <li>Subscribers</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};
