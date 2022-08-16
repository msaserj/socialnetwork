import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/profileImage.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    usersComponent: UsersPropsType
}

export const Users = (props: UsersComponentPropsType) => {
    let datas = props.usersComponent
    let pagesCount = Math.ceil(datas.totalUsersCount / datas.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(pgs => {
                    return <span className={datas.currentPage === pgs ? classes.selectedPage : ""}
                                 onClick={() => props.onPageChanged(pgs)}
                    > {pgs} </span>
                })}
            </div>
            {
                datas.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <NavLink to={"/profile/" + usr.id}> <img className={classes.userPhoto}
                                                                   src={usr.photos.small != null
                                                                       ? usr.photos.small : userPhoto} alt=""/>
                          </NavLink>
                      </div>
                      <div>
                          {usr.followed
                              ? <button disabled={datas.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {
                                            datas.toggleIsFollowing(true, usr.id)
                                            usersAPI.unFollow(usr.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    datas.unFollow(usr.id)
                                                }
                                                datas.toggleIsFollowing(false, usr.id)
                                            })

                                        }}>Unfollow</button>
                              : <button disabled={datas.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {
                                            datas.toggleIsFollowing(true, usr.id)
                                            usersAPI.follow(usr.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    datas.follow(usr.id)
                                                }
                                                datas.toggleIsFollowing(false, usr.id)
                                            })
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
                </div>)
            }
        </div>
    )
}