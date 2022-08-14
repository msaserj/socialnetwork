
import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {



    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: false, fullName: "Alex", status: "Loking for a job", location: {city: "Tagil", country: "Russia"}},
                {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: true, fullName: "Nikolai", status: "I flying in the clouds", location: {city: "E-burg", country: "Russia"}},
                {id: v1(), photoUrl: "https://thispersondoesnotexist.com/image", followed: true, fullName: "Evgeniy", status: "It's my status", location: {city: "Moscow", country: "Russia"}},
            ]
        )
    }

  return(
      <div>
          {
              props.usersPage.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <img className={classes.userPhoto} src={usr.photoUrl} alt=""/>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={()=>{props.unFollow(usr.id)}}>Unfollow</button>
                              : <button onClick={()=>{props.follow(usr.id)}}>Follow</button> }
                      </div>
                  </span>
                  <span>
                      <span>
                          <div>{usr.fullName}</div>
                          <div>{usr.status}</div>
                      </span>
                      <span>
                          <div>{usr.location.country}</div>
                          <div>{usr.location.city}</div>
                      </span>
                  </span>
              </div>)
          }
      </div>
  )
}