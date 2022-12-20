import React from 'react';
import {ChatMessageType} from "./Messages";
import avatar from '../../assets/images/avaSmith.png'
import css from "./ChatMessage.module.scss"
import {NavLink} from "react-router-dom";


const ChatMessage: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div className={css.messageBlock}>
                <NavLink className={css.messageUserBlock} to={"/profile/" + message.userId}>
                <img className={css.img} src={message.photo ? message.photo : avatar} alt="avatar"/>
                <div className={css.username}>
                    <h3>{message.userName}</h3>
                </div>
                </NavLink>

            <div className={css.message}>
                {message.message}
            </div>

        </div>
    );
};

export default ChatMessage;