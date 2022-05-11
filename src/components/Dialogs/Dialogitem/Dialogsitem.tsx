import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}
// type MessageType = {
//     message: string
// }
// type dialogsDataType =  {
//     id: string
//     name: string
// }
// type messagesDataType = {
//     id: string
//     message: string
// }

export const DialogItem = (props: DialogItemType) => {

    const setActive = ({isActive}: {isActive: boolean}) => isActive ? classes.activeLink : classes.inactiveLink;
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink className={setActive} to={path}>{props.name}</NavLink>
    </div>

}