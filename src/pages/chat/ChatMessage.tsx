import React from 'react';
import {ChatMessageType} from "./Messages";
import avatar from '../../assets/images/profileImage.png'




const ChatMessage: React.FC<{message: ChatMessageType}> = ({message}) => {

    return (
        <div>
            <img style={{height: 50, borderRadius: 50}} src={message.photo ? message.photo : avatar} alt="avatar"/><b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>

        </div>
    );
};

export default ChatMessage;