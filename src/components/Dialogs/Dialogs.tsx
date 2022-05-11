import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}
type MessageType = {
    message: string
}
type dialogsDataType =  {
    id: number
    name: string
}
type messagesDataType = {
    id: number
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
        {id: 1, name: "Serj"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]

    const messagesData: Array<messagesDataType>  = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
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