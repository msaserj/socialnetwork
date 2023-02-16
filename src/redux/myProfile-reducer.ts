import { ActionsType, AppThunk } from './redux-store';
import { profileAPI } from '../api/api';

// typeof ActionCreators
export type myProfileActionsType = ReturnType<typeof setMyProfileAC> | ReturnType<typeof toggleIsFetchingAC>;

// Actions
const SET_MY_PROFILE = 'sn/myProfile/SET-MY-PROFILE';
const TOGGLE_IS_FETCHING = 'sn/myProfile/TOGGLE-IS-FETCHING';

// ActionCreators
export const setMyProfileAC = (myProfile: UserProfileType) => ({ type: SET_MY_PROFILE, myProfile } as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const);

// types for InitialState

export type UserProfileType = {
  userId: number;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: UserContactsProfileType;
  photos: UserPhotosProfileType;
};
type UserContactsProfileType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};
export type UserPhotosProfileType = {
  small: string;
  large: string;
};

export type myProfilePageType = {
  myProfile: UserProfileType;
  isFetching: boolean;
};
const initialState: myProfilePageType = {
  myProfile: {} as UserProfileType,
  isFetching: false
};

// reducer
export const myProfileReducer = (state: myProfilePageType = initialState, action: ActionsType): myProfilePageType => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return { ...state, myProfile: action.myProfile };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

//thunks
export const getMyProfileTC = (): AppThunk => async (dispatch, getState) => {
  const id = getState().auth.data.id;
  dispatch(toggleIsFetchingAC(true));
  let data = await profileAPI.getProfile(id);
  dispatch(setMyProfileAC(data.data));
  dispatch(toggleIsFetchingAC(false));
};
