import { toggleIsFollowingAC } from '../redux/users-reducer';

export const updateObjectInArray = (items: any, itemId: number, objPropName: any, newObjProps: any) => {
  return items.map((usr: any) => {
    if (usr[objPropName] === itemId) {
      return { ...usr, ...newObjProps };
    }
    return usr;
  });
};

export const followUnfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleIsFollowingAC(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingAC(false, userId));
};

export const calcTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${returnedMinutes} : ${returnedSeconds}`;
};
