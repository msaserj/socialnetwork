import React from "react";
import {MessageItemType} from "../../../../redux/dialogs-reducer";
import css from "./Message.module.scss"
import {dateAgo} from "../../../00-Common/BeautyData/BeautyData";

type MessageType = {
    message: MessageItemType
    userId: number
}

export const Message: React.FC<MessageType> = (
    {message, userId}
) => {

    const style = message.senderId === userId ? css.right : css.left

    return(
        <div className={`${css.messageBlock} ${style}`} key={message.id}>
            <div className={css.nameData}>
                <h5 className={css.name}>{message.senderName}</h5>
                <span className={css.dateAdd}>{dateAgo(message.addedAt)}</span>
            </div>
            <div className={css.body}>
                <p className={css.message}>{message.body}</p>
            </div>

            {/*<div className={css.viewed}>viewed {message.viewed}</div>*/}
        </div>
        )




}
