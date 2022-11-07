import React, {useEffect, useRef, useState} from 'react';
import ChatMessage from "./ChatMessage";
import {useAppSelector} from "../../hooks/hooks";


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const Messages: React.FC = () => {
    console.log('render')
    const [autoScroll, setAutoScroll] = useState(false)

    const messages = useAppSelector(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        let element = e.currentTarget
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)

        }
    }
    useEffect(()=> {
        autoScroll && messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    },[messages])


    console.log(messages)
    return (
        <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
            Messages
            {messages.map((m) => <ChatMessage key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

export default Messages;