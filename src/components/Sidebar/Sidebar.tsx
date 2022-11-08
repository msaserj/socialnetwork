import React from "react";
import { NavLink } from "react-router-dom";
import css from './Sidebar.module.css'



export const Sidebar = () => {
    const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;
    return(
        <nav className={css.nav}>
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