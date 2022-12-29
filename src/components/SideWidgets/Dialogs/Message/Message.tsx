import React from "react";
import {MessageItemType} from "../../../../redux/dialogs-reducer";
import css from "./Messages.module.scss"

type MessageType = {
    message: MessageItemType
}

export const Message: React.FC<MessageType> = (
    {message}
) => {
    return <div className={css.messageBlock} key={message.id}>
        <div style={{padding: "5px"}}>data {new Date(message.addedAt).toLocaleString()}</div>
        <p style={{padding: "5px"}}>message {message.body}</p>
        <div style={{padding: "5px"}}>senderName {message.senderName}</div>
        <div style={{padding: "5px"}}>viewed {message.viewed}</div>
    </div>


}
