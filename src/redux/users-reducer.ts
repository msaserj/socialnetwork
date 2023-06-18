import { ActionsType, AppThunk } from './redux-store';
import { usersAPI } from '../api/api';
import { followUnfollow, updateObjectInArray } from '../utils/object-helpers';

// typeof ActionCreators
export type UsersActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleIsFollowingAC>
  | ReturnType<typeof setFilterAC>
  | ReturnType<typeof setPageSizeAC>
  | ReturnType<typeof sortAC>;

export type FilterType = typeof initialState.filter;

// Actions
const FOLLOW = 'sn/users/FOLLOW';
const SORT_USERS = 'sn/users/SORT_USERS';
const UNFOLLOW = 'sn/users/UNFOLLOW';
const SET_USERS = 'sn/users/SET-USERS';
const SET_FILTER = 'sn/users/SET-FILTER';
const SET_CURRENT_PAGE = 'sn/users/SET-CURRENT-PAGE';
const SET_PAGE_SIZE = 'sn/users/SET-PAGE-SIZE';
const SET_TOTAL_USERS_COUNT = 'sn/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'sn/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'sn/users/TOGGLE-IS-FOLLOWING';

// ActionCreators
export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);
export const sortAC = (photo: undefined) => ({ type: SORT_USERS, photo } as const);
export const unFollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);
export const setFilterAC = (filter: FilterType) => ({ type: SET_FILTER, filter } as const);
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setPageSizeAC = (pageSize: number) => ({ type: SET_PAGE_SIZE, pageSize } as const);
export const setTotalUsersCountAC = (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount } as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleIsFollowingAC = (isFetching: boolean, userId: number) =>
  ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId } as const);

// types for InitialState

export type UserLocationType = {
  city: string;
  country: string;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type UserType = {
  id: number;
  photos: PhotosType;
  followed: boolean;
  name: string;
  status: string;
  location: UserLocationType;
};
export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: [];
  filter: {
    term: string;
    friend: boolean | null;
  };
};
const initialState: UsersPageType = {
  users: [
    {
      id: 1,
      photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
      followed: false,
      name: 'Alex',
      status: 'Loking for a job',
      location: { city: 'Tagil', country: 'Russia' }
    },
    {
      id: 2,
      photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
      followed: true,
      name: 'Nikolai',
      status: 'I flying in the clouds',
      location: { city: 'E-burg', country: 'Russia' }
    },
    {
      id: 3,
      photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
      followed: true,
      name: 'Lisa',
      status: 'At home',
      location: { city: 'Tver', country: 'Russia' }
    }
  ],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  filter: {
    term: '',
    friend: false
  }
};

// reducer
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      } as UsersPageType;
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
      } as UsersPageType;
    case SET_USERS:
      return {
        ...state,
        users: action.users.sort(function (a, b) {
          if (!a.photos.small > !b.photos.small) {
            return 1;
          } else {
            return -1;
          }
          // a должно быть равным b
        })
      };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SORT_USERS:
      return { ...state, users: state.users.filter(e => e.photos.small === null) };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      } as UsersPageType;
    default:
      return state;
  }
};
//thunks
export const getUsersTC =
  (currentPage: number, pageSize: number, filter: FilterType): AppThunk =>
  async dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(currentPage));
    dispatch(setPageSizeAC(pageSize));
    dispatch(setFilterAC(filter));
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
    dispatch(toggleIsFetchingAC(false));
  };

export const followTC =
  (userId: number): AppThunk =>
  async dispatch => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    await followUnfollow(dispatch, userId, apiMethod, followAC);
  };

export const unFollowTC =
  (userId: number): AppThunk =>
  async dispatch => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI);
    await followUnfollow(dispatch, userId, apiMethod, unFollowAC);
  };
