import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";


export const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const Messages: React.FC = () => {

    const[messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(()=>{
        ws.addEventListener('message', (e)=>{
            let newMessage = JSON.parse(e.data);
            setMessages((prevMessages)=>[...prevMessages, ...newMessage])
        })
    },[ws])
    console.log(messages)
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            Messages
            {messages.map((m:any, index) => <ChatMessage key={index} message={m}/>)}
        </div>
    );
};

export default Messages;