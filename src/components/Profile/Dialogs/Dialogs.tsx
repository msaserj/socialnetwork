import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1">Serj</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Petr</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    )
}