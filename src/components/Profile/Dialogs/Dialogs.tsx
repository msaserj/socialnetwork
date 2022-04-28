import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    nameDialog: string
}

type MessageType = {
    message: string
}

const DialogItem  = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.nameDialog}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem nameDialog="Serj" id="1"/>
                <DialogItem nameDialog="Alex" id="2"/>
                <DialogItem nameDialog="Petr" id="3"/>
                <DialogItem nameDialog="Valera" id="4"/>
                <DialogItem nameDialog="Viktor" id="5"/>
                <DialogItem nameDialog="Valera" id="5"/>
            </div>
            <div className={classes.messages}>
               <Message message="Hi"/>
               <Message message="Hello"/>
               <Message message="How are you?"/>

            </div>
        </div>
    )
}