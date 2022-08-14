import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import UsersClass from "./UsersClass";

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (userId: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      usersPage: state.usersPage
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