import React from "react";
import { NavLink } from "react-router-dom";
import css from './SideBar.module.css'



export const SideBar = () => {
    const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;
    return(
        <nav className={css.nav}>
            <h3>Side bar menu</h3>
            <div>
                <div>
                    <NavLink to="/" className = {setActive}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className = {setActive}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" className = {setActive} >Users</NavLink>
                </div>
                 <div>
                    <NavLink to="/chat" className = {setActive} >Chat</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className = {setActive}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/setting" className = {setActive}>Settings</NavLink>
                </div>
            </div>
            <div>
            </div>
        </nav>
    )
}