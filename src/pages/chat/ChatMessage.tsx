import React from 'react';
import {ChatMessageType} from "./Messages";




const ChatMessage: React.FC<{message: ChatMessageType}> = ({message}) => {

    return (
        <div>
            <img style={{height: 50, borderRadius: 50}} src={message.photo} alt="avatar"/><b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>

        </div>
    );
};

export default ChatMessage;