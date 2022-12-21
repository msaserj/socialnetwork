import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import css from './Nav.module.scss'



type NavType = {
    logoutTC: () => void
    id: number
}

export const Nav = (props: NavType) => {

    const [showMenu, setShowMenu] = useState(false)
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? css.activeLink : css.inactiveLink;

    const cssMenu = showMenu ? css.showMenu : ""
    const activeMenu = showMenu ? css.activeMenu : ""

    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }

    const logoutHandler = () => {
        props.logoutTC()
    }
    return (
        <div onBlur={() => setShowMenu(false)} onClick={showMenuHandler} className={`${css.menuButton} ${activeMenu}`}>
            <div className={css.menuIcon}></div>
            <ul className={`${css.menu} ${cssMenu}`}>
                <NavLink to={"/profile/" + props.id} className={setActive}>
                    <li className={css.menuItem}>About</li>
                </NavLink>
                <NavLink to={"/stream/" + props.id} className={setActive}>
                    <li className={css.menuItem}>Stream</li>
                </NavLink>

                <NavLink  className={setActive} to={"/users"}>
                    <li className={css.menuItem} onClick={logoutHandler}>Log Out</li>
                </NavLink>
            </ul>
        </div>

    );
};
