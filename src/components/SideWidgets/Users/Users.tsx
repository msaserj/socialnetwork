import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../../00-Common/Paginator/Paginator";
import {User} from "./User";
import {SearchForm} from "./SearchForm";
import {FilterType, getUsersTC} from "../../../redux/users-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {useSearchParams} from 'react-router-dom'
import css from "./Users.module.css"
import {PreloaderSmall} from "../../00-Common/PreloaderSmall/PreloaderSmall";

type UsersComponentPropsType = {
    onPageChanged: (pgs: number, pageSize: number) => void
    onFilterChanged: (filter: FilterType) => void
    usersComponent: UsersPropsType
    followingInProgress: string[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    isFetching: boolean
}

export const Users: React.FC<UsersComponentPropsType> = React.memo((
    {usersComponent, onPageChanged, followTC, unFollowTC, followingInProgress, onFilterChanged, isFetching}) => {

    let userData = usersComponent
    const filter = useAppSelector(state => state.usersPage.filter)
    const currentPage = useAppSelector(state => state.usersPage.currentPage)
    const pageSize = useAppSelector(state => state.usersPage.pageSize)
    const isAuth = useAppSelector(state => state.auth.data.id)


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

    const sortedUsers = userData.users.sort(function (a, b){

            if (!a.photos.small > !b.photos.small ) {
                return 1;
            } else {
                return -1;
            }
            // a должно быть равным b


    })

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
        <div className={css.users}>
            <div>
                <SearchForm onFilterChanged={onFilterChanged}/>
                <div style={{height: "10px"}}>{isFetching? <PreloaderSmall/>: null}
                </div></div>


            <div className={css.usersBlock}>
                {
                    sortedUsers.map((usr, index) => <User
                        isAuth={isAuth}
                        key={index}
                        usersComponent={usr}
                        followTC={followTC}
                        followingInProgress={followingInProgress}
                        unFollowTC={unFollowTC}/>)
                }
            </div>
            <div className={css.paginator}>
                <Paginator
                    isFetching={isFetching}
                    currentPage={userData.currentPage}
                    onPageChanged={onPageChanged}
                    pageSize={userData.pageSize}
                    totalItemsCount={userData.totalUsersCount}/>

            </div>
        </div>
    )
})