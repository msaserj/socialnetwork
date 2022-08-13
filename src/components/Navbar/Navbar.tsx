import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'
import {Sidebar} from "./Sidebar/Sidebar";


export const Navbar = () => {
    const setActive = ({isActive}: {isActive: boolean}) => isActive ? classes.activeLink : classes.inactiveLink;
    return(
        <nav className={classes.nav}>
            <div>
                <div>
                    <NavLink to="/profile" className = {setActive}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className = {setActive}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" className = {setActive} >Users</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className = {setActive}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/setting" className = {setActive}>Settings</NavLink>
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </nav>
    )
}