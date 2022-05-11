import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogItemType = {
    id: string
    name: string
}
type MessageType = {
    message: string
}
type dialogsDataType =  {
    id: string
    name: string
}
type messagesDataType = {
    id: string
    message: string
}

const DialogItem = (props: DialogItemType) => {

    const setActive = ({isActive}: {isActive: boolean}) => isActive ? classes.activeLink : classes.inactiveLink;
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink className={setActive} to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    const dialogsData: Array<dialogsDataType> = [
        {id: v1(), name: "Serj"},
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Petr"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"}
    ]

    const messagesData: Array<messagesDataType>  = [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>

            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}