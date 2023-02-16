import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.scss';
import { FaHome, FaRegArrowAltCircleLeft, FaRegUserCircle } from 'react-icons/fa';

type NavType = {
  logoutTC: () => void;
  id: number;
};

export const Nav = (props: NavType) => {
  const [showMenu, setShowMenu] = useState(false);

  const cssMenu = showMenu ? css.showMenu : '';
  const activeMenu = showMenu ? css.activeMenu : '';

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    props.logoutTC();
  };
  return (
    <div onBlur={() => setShowMenu(false)} onClick={showMenuHandler} className={`${css.menuButton} ${activeMenu}`}>
      <div className={css.menuIcon}></div>
      <ul className={`${css.menu} ${cssMenu}`}>
        <NavLink to={'/profile/' + props.id}>
          <li className={css.menuItem}>
            <span>
              <FaRegUserCircle />
            </span>
            About
          </li>
        </NavLink>
        <NavLink to={'/stream/' + props.id}>
          <li className={css.menuItem}>
            <span>
              <FaHome />
            </span>
            Stream
          </li>
        </NavLink>

        <NavLink to={'/users'}>
          <li className={css.menuItem} onClick={logoutHandler}>
            <span>
              <FaRegArrowAltCircleLeft />
            </span>
            Log Out
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
