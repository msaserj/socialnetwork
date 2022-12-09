import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Nav.module.css'

export const Nav = () => {
    const setActive = ({isActive}: { isActive: boolean }) => isActive ? css.activeLink : css.inactiveLink;

    return (
        <div className={css.menu}>
            <ul className="sub-menu">
                <li id="menu-item-35" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35">
                    <a href="https://velikorodnov.com/dev/devmatebook/profile/">Profile</a></li>
                <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34">
                    <a href="https://velikorodnov.com/dev/devmatebook/members/">Members</a></li>
            </ul>
<ul>
    <li>
        <NavLink to="/" className={setActive}>Profile</NavLink>
    </li>
</ul>


                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>

                <NavLink to="/users" className={setActive}>Users</NavLink>

                <NavLink to="/chat" className={setActive}>Chat</NavLink>

            {/*<NavLink to="/music" className = {setActive}>Music</NavLink>*/}

            {/*<NavLink to="/setting" className = {setActive}>Settings</NavLink>*/}
        </div>
    );
};
