import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Message} from "./Message/Message";

type DialogType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    message: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export const Dialogs = (props: DialogPageType) => {



    let dialogsElement = props.dialogs.map(el=> <DialogItem key={el.id} name={el.name}   id={el.id}/>);
    let messagesElement = props.messages.map(el=> <Message key={el.id} message={el.message} />);

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