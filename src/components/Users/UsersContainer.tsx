import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {
    FilterType,
    followTC,
    getUsersTC,
    setCurrentPageAC,
    setUsersAC,
    unFollowTC,
    UserType
} from "../../redux/users-reducer";
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
    getUsersSuperSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, "");
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, "");
    }

    onFilterChanged= (filter: FilterType) => {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, filter.term);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged.bind(this)}
                onFilterChanged={this.onFilterChanged.bind(this)}
                usersComponent={this.props}
                followTC={this.props.followTC}
                followingInProgress={this.props.followingInProgress}
                unFollowTC={this.props.unFollowTC}/>
        </>;
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        // users: getUsers(state),
        pageSize: gePageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options
export  default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(mapStateToProps,
        {followTC, unFollowTC, setUsers: setUsersAC, setCurrentPage: setCurrentPageAC, getUsers: getUsersTC}),
    WithAuthRedirect
)(UsersContainer)



// types
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type MapDispatchToPropsType = {
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number, term: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
