import React from 'react';
import { Preloader } from '../../../../00-Common/Preloader/Preloader';
import { Contact } from './ContactsData';
import { UserProfileType } from '../../../../../redux/profile-reducer';
import css from './ProfileData.module.scss';

type ProfileDataType = {
  userProfile: UserProfileType | null;
  isOwner: boolean;
  // goToEditMode: () => void
};

export const ProfileData: React.FC<ProfileDataType> = ({ userProfile }) => {
  if (!userProfile) {
    return <Preloader />; //если нет профайла то крутилка
  }
  let contacts = userProfile.contacts;
  let data = userProfile;

  return (
    <div>
      <div className={css.aboutItem}>
        <p>
          <b>Full Name:</b> {data.fullName}
        </p>
      </div>
      <div className={css.aboutItem}>
        <p>
          <b>About Me:</b> {data.aboutMe}
        </p>
      </div>
      <div className={css.aboutItem}>
        {data.lookingForAJob ? (
          <p>Looking for a job! {data.lookingForAJobDescription}</p>
        ) : (
          <p>I'm not looking for a job.</p>
        )}
      </div>

      <div className={css.aboutItem}>
        <p>
          <b>Contacts:</b>
        </p>
      </div>

      <ul className={css.contacts}>
        {contacts &&
          Object.keys(contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />;
          })}
      </ul>
    </div>
  );
};
