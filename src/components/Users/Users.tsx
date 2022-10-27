import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";
import {SearchForm} from "./SearchForm";
import {FilterType, getUsersTC} from "../../redux/users-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useSearchParams} from 'react-router-dom'


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
    const filter = useAppSelector(state => state.usersPage.filter)
    const currentPage = useAppSelector(state => state.usersPage.currentPage)
    const pageSize = useAppSelector(state => state.usersPage.pageSize)

    const dispatch = useAppDispatch()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const result: any = {}

        // @ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else if (value === 'false') {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = {friend, term}

        dispatch(getUsersTC(actualPage, pageSize, actualFilter))

        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)

        // eslint-disable-next-line
    }, [filter, currentPage])
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