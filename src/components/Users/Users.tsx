import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/profileImage.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";



type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    usersComponent: UsersPropsType
}

export const Users: React.FC<UsersComponentPropsType> = ({usersComponent, onPageChanged}) => {
    let userData = usersComponent
    return (
        <div>
            <Paginator currentPage={userData.currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={userData.pageSize}
                       totalUsersCount={userData.totalUsersCount}/>
            {
                userData.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <NavLink to={"/profile/" + usr.id}>
                              <img className={classes.userPhoto} src={usr.photos.small != null
                                  ? usr.photos.small : userPhoto} alt=""/>
                          </NavLink>
                      </div>
                      <div>
                          {usr.followed
                              ? <button disabled={userData.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {userData.unFollowTC(usr.id)}}>Unfollow</button>
                              : <button disabled={userData.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {userData.followTC(usr.id)}}>Follow</button>}
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
                </div>)
            }
        </div>
    )
}