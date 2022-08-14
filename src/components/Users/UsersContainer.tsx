import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import UsersClass from "./UsersClass";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (userId: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
      follow: (userId: string)=>{
          let action = followAC(userId)
          dispatch(action)
      },
      unFollow: (userId: string)=>{
          dispatch(unFollowAC(userId))
      },
      setUsers: (users:Array<UserType>)=>{
          dispatch(setUsersAC(users))
      }
  }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)