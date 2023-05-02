import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { UserProfileType } from '../../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';

export type ProfileType = {
  userProfile: UserProfileType | null;
  isAuth: boolean;
  status: string;
  updateStatus: (status: string) => void;
  getStatus: (profileId: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
  saveProfile: (profile: any, setStatus: any, setSubmitting: any) => void;
  resultCode: number;
};

export const Profile = (props: ProfileType) => {
  const isAuth = useAppSelector(state => state.auth.data.id);
  if (!isAuth) {
    return <Navigate to={'/users'} />;
  }

  return (
    <>
      <ProfileInfo
        status={props.status}
        updateStatus={props.updateStatus}
        getStatus={props.getStatus}
        userProfile={props.userProfile}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        resultCode={props.resultCode}
      />
    </>
  );
};
