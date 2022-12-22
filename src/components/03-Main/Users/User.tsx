import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/avaSmith.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import {Button} from "../../00-Common/Button/Button";


type UsersComponentPropsType = {
    usersComponent: UserType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export const User: React.FC<UsersComponentPropsType> = ({usersComponent, followTC, unFollowTC, followingInProgress}) => {
    let usr = usersComponent

    return (
        <div>
                  <span>
                      <div>
                          <NavLink to={"/profile/" + usr.id}>
                              <img className={classes.userPhoto} src={usr.photos.small != null
                                  ? usr.photos.small : userPhoto} alt=""/>
                          </NavLink>
                      </div>
                      <div>
                          {usr.followed
                              ? <Button disabled={followingInProgress.some(id => +id === usr.id)}
                                        onClick={() => {
                                            unFollowTC(usr.id)
                                        }}>Unfollow</Button>
                              : <Button disabled={followingInProgress.some(id => +id === usr.id)}
                                        onClick={() => {
                                            followTC(usr.id)
                                        }}>Follow</Button>}
                      </div>
                  </span>
            <span>
                      <span>
                          <div>{usr.name}</div>
                          <div>STATUS: {usr.status}</div>
                      </span>

                  </span>
        </div>
    )
}