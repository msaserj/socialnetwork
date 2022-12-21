import React, {useEffect} from 'react';
import css from "./ProfileWidget.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getMyProfileTC} from "../../../../redux/myProfile-reducer";
import {NavLink} from "react-router-dom";
import {editProfileAC} from "../../../../redux/profile-reducer";
import {logoutTC} from "../../../../redux/auth-reducer";

type ProfileWidgetType = {}


export const ProfileWidget: React.FC<ProfileWidgetType> = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector(state => state.myProfile.myProfile.fullName)
    const avatar = useAppSelector(state => state.myProfile.myProfile.photos)
    const id = useAppSelector(state => state.myProfile.myProfile.userId)
    const edit = useAppSelector(state => state.profilePage.edit)
    const userid = useAppSelector(state => state.profilePage.userProfile.userId)

    const setActive = ({isActive}: { isActive: boolean }) => isActive ? css.activeLink : css.inactiveLink;

    const editHandler = () => {
        dispatch(editProfileAC(!edit))
    }
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    const editFalseHandler = () => {
        dispatch(editProfileAC(false))
    }

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
                    <li onClick={editFalseHandler}><NavLink to={"/profile/" + id}>About</NavLink></li>
                    <li>Stream</li>
                    { id === userid && <li style={{cursor: "pointer"}} onClick={editHandler}>Edit Profile</li>}
                </ul>
                <ul className={css.profileMenu}>
                    <h3 >Community</h3>
                    <li><NavLink to="/dialogs" className={setActive}>Messages</NavLink></li>
                    <li><NavLink to="/users" className={setActive}>Users</NavLink></li>
                    <li><NavLink to="/chat" className={setActive}>Common Chat</NavLink></li>
                    <li style={{cursor: "pointer"}} onClick={logoutHandler}>Log Out</li>
                </ul>
            </div>
        </div>
    );
};
