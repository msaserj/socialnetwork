import React from 'react';
import AddMessageForm from "./AddMessageForm";
import Messages from "./Messages";


const Chat: React.FC = () => {


    return (
        <div>
            Chat
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

export default Chat;