import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const Messages: React.FC<{wsChanel: WebSocket | null}> = ({wsChanel}) => {

    const[messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(()=>{
        const onMessageHandler = (e: MessageEvent) => {
            let newMessage = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessage])
        };
        wsChanel?.addEventListener('message', onMessageHandler)

        return () => {
            wsChanel?.removeEventListener('message', onMessageHandler)
        }
    },[wsChanel])
    console.log(messages)
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            Messages
            {messages.map((m:any, index) => <ChatMessage key={index} message={m}/>)}
        </div>
    );
};

export default Messages;