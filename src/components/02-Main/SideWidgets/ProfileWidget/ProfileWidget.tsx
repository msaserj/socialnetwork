import React, {useEffect} from 'react';
import css from "./ProfileWidget.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getMyProfileTC} from "../../../../redux/myProfile-reducer";
import {NavLink} from "react-router-dom";

type ProfileWidgetType = {}


export const ProfileWidget: React.FC<ProfileWidgetType> = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector(state => state.myProfile.myProfile.fullName)
    const avatar = useAppSelector(state => state.myProfile.myProfile.photos)
    const id = useAppSelector(state => state.myProfile.myProfile.userId)
    console.log(name)

    useEffect(()=>{
        dispatch(getMyProfileTC())
    },[dispatch])
    return (
        <div className={css.sideProfile}>
            <div className={css.profileCover}>
            </div>
            <div className={css.profileContent}>
                <NavLink to={"/profile/" + id}>
                    <div className={css.profileBlock}>
                        <img className={css.ava} src={avatar? avatar.small : ""} alt=""/>
                        <h3 className={css.name}>{name}</h3>
                    </div>
                </NavLink>


                <ul className={css.profileMenu}>
                    <h3>My Profile</h3>
                    <li>Stream</li>
                    <li>About</li>
                    <li>Preferences</li>
                </ul>
                <ul className={css.profileMenu}>
                    <h3>My Community</h3>
                    <li>Activity</li>
                    <li>Users</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    );
};