import React from "react";
import classes from './Navbar.module.css'

export const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}