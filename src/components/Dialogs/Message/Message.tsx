import React from "react";
import classes from './../Dialogs.module.css';


// type DialogItemType = {
//     id: string
//     name: string
// }
type MessageType = {
    message: string
}
// type dialogsDataType =  {
//     id: string
//     name: string
// }
// type messagesDataType = {
//     id: string
//     message: string
// }


export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
