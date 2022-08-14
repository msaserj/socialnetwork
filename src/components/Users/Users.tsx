import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/profileImage.png";
import {UsersPropsType} from "./UsersContainer";


type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    usersComponent: UsersPropsType
}

export const Users = (props: UsersComponentPropsType) => {

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
                  >{pgs}</span>
              })}
          </div>
          {
              props.usersComponent.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <img className={classes.userPhoto} src={usr.photos.small != null
                              ? usr.photos.small : userPhoto} alt=""/>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={() => {
                                  props.usersComponent.unFollow(usr.id)
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  props.usersComponent.follow(usr.id)
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