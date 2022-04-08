import React from "react";
import classes from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Serj
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Alex
                </div>
                <div className={classes.dialog}>
                    Petr
                </div>
                <div className={classes.dialog}>
                    Valera
                </div>
                <div className={classes.dialog}>
                    Viktor
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