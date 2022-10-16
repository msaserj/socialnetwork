import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/profileImage.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";


type UsersComponentPropsType = {
    usersComponent: UserType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void

}

export const User: React.FC<UsersComponentPropsType> = ({usersComponent, followTC, unFollowTC, followingInProgress}) => {
    let usr = usersComponent
    return (
        <div key={usr.id}>
                  <span>
                      <div>
                          <NavLink to={"/profile/" + usr.id}>
                              <img className={classes.userPhoto} src={usr.photos.small != null
                                  ? usr.photos.small : userPhoto} alt=""/>
                          </NavLink>
                      </div>
                      <div>
                          {usr.followed
                              ? <button disabled={followingInProgress.some(id => +id === usr.id)}
                                        onClick={() => {
                                            unFollowTC(usr.id)
                                        }}>Unfollow</button>
                              : <button disabled={followingInProgress.some(id => +id === usr.id)}
                                        onClick={() => {
                                            followTC(usr.id)
                                        }}>Follow</button>}
                      </div>
                  </span>
            <span>
                      <span>
                          <div>{usr.name}</div>
                          <div>{usr.status}</div>
                      </span>
                      <span>
                          <div>{"usr.location.country"}</div>
                          <div>{"usr.location.city"}</div>
                      </span>
                  </span>
        </div>


    )
}