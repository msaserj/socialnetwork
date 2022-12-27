import React from "react";
import userPhoto from "../../../assets/images/avaSmith.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import {Button} from "../../00-Common/Button/Button";
import css from "./User.module.scss"


type UsersComponentPropsType = {
    usersComponent: UserType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    isAuth: number
}

export const User: React.FC<UsersComponentPropsType> = (
    {usersComponent, followTC, unFollowTC, followingInProgress, isAuth}) => {


    let usr = usersComponent

    return (
        <div className={css.userBlock}>
            <div className={css.photoBlock}>
                <NavLink to={"/profile/" + usr.id}>
                    <img className={css.userPhoto} src={usr.photos.small != null
                        ? usr.photos.small : userPhoto} alt=""/>
                </NavLink>
                <div className={css.buttons}>
                    {usr.followed
                        ? !!isAuth && <Button disabled={followingInProgress.some(id => +id === usr.id)}
                                              onClick={() => {
                                                  unFollowTC(usr.id)
                                              }}>Unfollow</Button>
                        : !!isAuth && <Button disabled={followingInProgress.some(id => +id === usr.id)}
                                              onClick={() => {
                                                  followTC(usr.id)
                                              }}>Follow</Button>}
                </div>
            </div>
            <div className={css.aboutBlock}>

                <span className={css.name}>{usr.name}</span>

                <span className={css.status}>{usr.status}</span>

            </div>
        </div>
    )
}