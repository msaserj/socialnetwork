import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import {
  FilterType,
  followTC,
  getUsersTC,
  setCurrentPageAC,
  setUsersAC,
  unFollowTC,
  UserType
} from '../../../redux/users-reducer';
import { Users } from './Users';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
  gePageSize,
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsersSuperSelector
} from '../../../redux/users-selectors';

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
  }

  onPageChanged = (pageNumber: number, pageSize: number) => {
    const { filter } = this.props;
    this.props.getUsers(pageNumber, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props;
    this.props.getUsers(1, pageSize, filter);
  };

  render() {
    return (
      <>
        <Users
          onPageChanged={this.onPageChanged.bind(this)}
          onFilterChanged={this.onFilterChanged.bind(this)}
          usersComponent={this.props}
          followTC={this.props.followTC}
          followingInProgress={this.props.followingInProgress}
          unFollowTC={this.props.unFollowTC}
          isFetching={this.props.isFetching}
        />
      </>
    );
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
    followingInProgress: getFollowingInProgress(state),
    filter: getFilter(state)
  };
};

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options
export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(mapStateToProps, {
    followTC,
    unFollowTC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC
  }),
  WithAuthRedirect
)(UsersContainer);

// types
type MapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: string[];
  filter: FilterType;
};
type MapDispatchToPropsType = {
  followTC: (userId: number) => void;
  unFollowTC: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
