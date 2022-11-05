import React from 'react';
import ChatMessage from "./ChatMessage";
import {useAppSelector} from "../../hooks/hooks";


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const Messages: React.FC = () => {

    const messages = useAppSelector(state => state.chat.messages)

    console.log(messages)
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            Messages
            {messages.map((m:any, index) => <ChatMessage key={index} message={m}/>)}
        </div>
    );
};

export default Messages;