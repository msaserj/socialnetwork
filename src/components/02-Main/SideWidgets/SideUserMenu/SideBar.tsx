import React from "react";
import { NavLink } from "react-router-dom";
import css from './SideBar.module.css'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../../../00-Common/Button/Button";
import {FiMenu} from "react-icons/fi";




export const SideBar = () => {
    const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;
    return(
        <nav className={css.nav}>
            <h3>Side bar menu</h3>
            <Button><FiMenu className={css.icon}/></Button>
            <div>
                <div>
                    <FontAwesomeIcon icon={faHome} /><NavLink to="/" className = {setActive}>Profile</NavLink>
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