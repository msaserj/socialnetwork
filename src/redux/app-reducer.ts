import { ActionsType, AppThunk } from './redux-store';
import { getAuthUserDataTC } from './auth-reducer';

// typeof ActionCreators
export type AppActionsType = ReturnType<typeof initialAC> | ReturnType<typeof fetchingAC>;

// Actions
const SET_INITIALIZED = 'sn/app/SET-INITIALIZED';
const SET_FETCHING = 'sn/app/SET-FETCHING';

// ActionCreators
export const initialAC = (initialized: boolean) => ({ type: SET_INITIALIZED, initialized } as const);
export const fetchingAC = (fetching: boolean) => ({ type: SET_FETCHING, fetching } as const);

// types for InitialState
export type AppType = {
  initialized: boolean;
  fetching: boolean;
};

const initialState: AppType = {
  initialized: false,
  fetching: false
};
// reducer
export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.initialized };
    case SET_FETCHING:
      return { ...state, initialized: action.fetching };
    default:
      return state;
  }
};

// thunk

export const initializeTC = (): AppThunk => async dispatch => {
  await dispatch(getAuthUserDataTC());
  dispatch(initialAC(true));
};
