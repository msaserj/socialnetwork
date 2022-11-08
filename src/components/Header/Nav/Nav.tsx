import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Nav.module.css'

export const Nav = () => {
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? css.activeLink : css.inactiveLink;

    return (
        <div className={css.menu}>

                <NavLink to="/" className={setActive}>Profile</NavLink>

                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>

                <NavLink to="/users" className={setActive}>Users</NavLink>

                <NavLink to="/chat" className={setActive}>Chat</NavLink>

            {/*<NavLink to="/music" className = {setActive}>Music</NavLink>*/}

            {/*<NavLink to="/setting" className = {setActive}>Settings</NavLink>*/}
        </div>
    );
};
