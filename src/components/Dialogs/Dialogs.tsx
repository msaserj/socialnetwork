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

    const dialogs: Array<dialogsDataType> = [
        {id: v1(), name: "Serj"},
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Petr"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"}
    ]

    const messages: Array<messagesDataType>  = [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra"},
        {id: v1(), message: "Yo1"},
        {id: v1(), message: "Yo2"},
        {id: v1(), message: "Yo3"},
    ]

    let dialogsElement = dialogs.map(el=> <DialogItem key={el.id} name={el.name}   id={el.id}/>);
    let messagesElement = messages.map(el=> <Message key={el.id} message={el.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}