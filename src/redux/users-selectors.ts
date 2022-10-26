import {RootState} from "./redux-store";
import {createSelector} from "reselect";

// primitive selector
export const getUsers = (state: RootState) => {
  return state.usersPage.users.filter(e=> true)
}
// super selector
export const getUsersSuperSelector = createSelector(getUsers, (users)=>{
    return users.filter(e=> true)
})

// createSelector - such as useEffect. Dependency from primitive Selectors

export const gePageSize = (state: RootState) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
}