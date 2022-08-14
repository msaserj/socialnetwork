import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";


class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {


        return <Users
            // currentPage={this.props.currentPage}
            // follow={this.props.follow}
            // pageSize={this.props.pageSize}
            // setCurrentPage={this.props.setCurrentPage}
            // setTotalUsersCount={this.props.setTotalUsersCount}
            // setUsers={this.props.setUsers}
            // totalUsersCount={this.props.totalUsersCount}
            // unFollow={this.props.unFollow}
            // users={this.props.users}
            // onPageChanged={this.onPageChanged}

         onPageChanged={this.onPageChanged.bind(this)} usersComponent={this.props}/>;
    }
}

export default UsersAPIComponent;