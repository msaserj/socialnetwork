import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, setCurrentPage, setUsers, unFollowTC, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    gePageSize,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged.bind(this)} usersComponent={this.props}/>
        </>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: gePageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options
export  default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {followTC, unFollowTC, setUsers, setCurrentPage, getUsers: getUsersTC}),
    WithAuthRedirect
)(UsersContainer)



// types
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}
type MapDispatchToPropsType = {
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
