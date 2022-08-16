import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/profileImage.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    usersComponent: UsersPropsType
}

export const Users = (props: UsersComponentPropsType) => {
    const apiKey = "43312b93-73fd-4342-90f4-f7fe2aad1adb"
    let pagesCount = Math.ceil(props.usersComponent.totalUsersCount / props.usersComponent.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
  return(
      <div>
          <div>
              {pages.map(pgs => {
                  return <span className={props.usersComponent.currentPage === pgs ? classes.selectedPage : ""}
                               onClick={()=>props.onPageChanged(pgs)}
                  > {pgs} </span>
              })}
          </div>
          {
              props.usersComponent.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <NavLink to={"/profile/" + usr.id} > <img className={classes.userPhoto} src={usr.photos.small != null
                              ? usr.photos.small : userPhoto} alt=""/>
                          </NavLink>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={() => {
                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usr.id}`,
                                      {withCredentials: true,
                                      headers: {
                                          "API-KEY": apiKey
                                      }
                                      })
                                      .then(res => {
                                          if (res.data.resultCode === 0) {
                                              props.usersComponent.unFollow(usr.id)
                                          }
                                      })


                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${usr.id}`, null,
                                      {withCredentials: true,
                                          headers: {
                                              "API-KEY": apiKey
                                          }
                                      })
                                      .then(res => {
                                          if (res.data.resultCode === 0) {
                                              props.usersComponent.follow(usr.id)
                                          }
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