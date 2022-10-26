import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";
import {SearchForm} from "./SearchForm";
import {FilterType} from "../../redux/users-reducer";


type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    onFilterChanged: (filter: FilterType) => void
    usersComponent: UsersPropsType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export const Users: React.FC<UsersComponentPropsType> = React.memo((
    {usersComponent, onPageChanged, followTC, unFollowTC, followingInProgress, onFilterChanged}) => {
    let userData = usersComponent
    return (
        <div>
            <div>
                <SearchForm onFilterChanged={onFilterChanged}/>
            </div>
            <Paginator
                currentPage={userData.currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={userData.pageSize}
                       totalItemsCount={userData.totalUsersCount}/>
            {
                userData.users.map((usr, index) => <User
                    key={index}
                    usersComponent={usr}
                    followTC={followTC}
                    followingInProgress={followingInProgress}
                    unFollowTC={unFollowTC}/>)
            }
        </div>
    )
})