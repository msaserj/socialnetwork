
import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../assets/images/profileImage.png"


export const Users = (props: UsersPropsType) => {



    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
            //debugger
            props.setUsers(res.data.items)
        })

        // props.setUsers(
        //     [
        //         {
        //             id: v1(),
        //             photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
        //             followed: false,
        //             name: "Alex",
        //             status: "Loking for a job",
        //             location: {city: "Tagil", country: "Russia"}
        //         },
        //         {
        //             id: v1(),
        //             photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
        //             followed: true,
        //             name: "Nikolai",
        //             status: "I flying in the clouds",
        //             location: {city: "E-burg", country: "Russia"}
        //         },
        //         {
        //             id: v1(),
        //             photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
        //             followed: true,
        //             name: "Lisa",
        //             status: "At home",
        //             location: {city: "Tver", country: "Russia"}
        //         },
        //     ]
        // )
    }

  return(
      <div>
          {
              props.usersPage.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <img className={classes.userPhoto} src={usr.photos.small != null
                              ? usr.photos.small : userPhoto} alt=""/>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={()=>{props.unFollow(usr.id)}}>Unfollow</button>
                              : <button onClick={()=>{props.follow(usr.id)}}>Follow</button> }
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