import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    usersComponent: UsersPropsType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export const Users: React.FC<UsersComponentPropsType> = ({usersComponent, onPageChanged, followTC, unFollowTC, followingInProgress}) => {
    let userData = usersComponent
    return (
        <div>
            <Paginator currentPage={userData.currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={userData.pageSize}
                       totalUsersCount={userData.totalUsersCount}/>
            {
                userData.users.map(usr => <User
                    usersComponent={usr}
                    followTC={followTC}
                    followingInProgress={followingInProgress}
                    unFollowTC={unFollowTC}/>)
            }
        </div>
    )
}