import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/profileImage.png"


export const UsersFunc = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
                //debugger
                props.setUsers(res.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {
                props.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <img className={classes.userPhoto} src={usr.photos.small != null
                              ? usr.photos.small : userPhoto} alt=""/>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={() => {
                                  props.unFollowTC(usr.id)
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  props.followTC(usr.id)
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