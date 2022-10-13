import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

// primitive selector
export const getUsers = (state: AppStateType) => {
  return state.usersPage.users.filter(e=> true)
}
// super selector
export const getUsersSuperSelector = createSelector(getUsers, (users)=>{
    return users.filter(e=> true)
})

// createSelector - such as useEffect. Dependency from primitive Selectors



export const gePageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}