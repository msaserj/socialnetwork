import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/avaSmith.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import {Button} from "../../00-Common/Button/Button";
import css from "./user.module.scss"


type UsersComponentPropsType = {
    usersComponent: UserType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    isAuth: number
}

export const User: React.FC<UsersComponentPropsType> = ({
                                                            usersComponent,
                                                            followTC,
                                                            unFollowTC,
                                                            followingInProgress,
                                                            isAuth
                                                        }) => {
    let usr = usersComponent

    return (
        <div >
            <div>
                <NavLink to={"/profile/" + usr.id}>
                    <img className={classes.userPhoto} src={usr.photos.small != null
                        ? usr.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
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
            <div>{usr.name}</div>
            <div>STATUS: {usr.status}</div>

        </div>
    )
}