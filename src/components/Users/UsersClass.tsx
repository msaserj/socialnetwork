import React from "react";
import classes from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/profileImage.png"


class Users extends React.Component<UsersPropsType>  {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=5").then(res => {
            //debugger
            this.props.setUsers(res.data.items)
        })
    }

    getUsers = () => {

    }

    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        let pages = []
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <button onClick={this.getUsers}>GetUsers</button>
                <div>
                    {pages.map(pgs => {
                        <span className={true && classes.selectedPage}>{pgs}</span>
                    })}
                </div>
                {
                    this.props.users.map(usr => <div key={usr.id}>
                  <span>
                      <div>
                          <img className={classes.userPhoto} src={usr.photos.small != null
                              ? usr.photos.small : userPhoto} alt=""/>
                      </div>
                      <div>
                          {usr.followed
                              ? <button onClick={() => {
                                  this.props.unFollow(usr.id)
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  this.props.follow(usr.id)
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
        );
    }
}

export default Users;