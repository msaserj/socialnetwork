import React from 'react';
import css from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { DataType } from '../../redux/auth-reducer';
import logo from '../../assets/images/logo.png';
import { Nav } from './Nav/Nav';
import avaNeo from '../../assets/images/avaNeo.png';
import { UserPhotosProfileType } from '../../redux/profile-reducer';
import { ContainerAudioPlayer } from './AudioPlayer/ContainerAudioPlayer';

type HeaderType = {
  authHeader: DataType;
  logoutTC: () => void;
  id: number;
  avatar: UserPhotosProfileType;
  name: string;
};

export const Header = (props: HeaderType) => {
  return (
    <header className={css.header}>
      <div className={css.flexContainer}>
        <img className={css.logo} src={logo} alt="logo" />
        {!!props.authHeader.id && <ContainerAudioPlayer />}
        {!props.authHeader.id ? (
          <NavLink to={'/registr'}>Registration</NavLink>
        ) : (
          <div className={css.profileBlock}>
            <NavLink className={css.profile} to={'/profile/' + props.id}>
              {props.avatar && (
                <img className={css.ava} src={props.avatar.small != null ? props.avatar.small : avaNeo} alt="" />
              )}
              <h3 className={css.name}>{props.name}</h3>
            </NavLink>
            <Nav logoutTC={props.logoutTC} id={props.id} />
          </div>
        )}
      </div>
    </header>
  );
};
