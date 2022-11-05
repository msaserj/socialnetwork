import React, {useEffect} from 'react';
import AddMessageForm from "./AddMessageForm";
import Messages from "./Messages";
import {useAppDispatch} from "../../hooks/hooks";
import {startMessagesListeningTC, stopMessagesListeningTC} from "../../redux/chat-reducer";


const Chat: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(startMessagesListeningTC())
        return () => {
            dispatch(stopMessagesListeningTC())
        }
    },[])



    return (
        <div>
            Chat
            <Messages />
            <AddMessageForm />
        </div>
    );
};

export default Chat;