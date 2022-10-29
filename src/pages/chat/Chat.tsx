import React, {useEffect, useState} from 'react';
import AddMessageForm from "./AddMessageForm";
import Messages from "./Messages";


const Chat: React.FC = () => {

    const [wsChanel, setWsChanel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log('close ws')
            setTimeout(createChanel, 3000)
        }

        function createChanel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler)
            setWsChanel(ws)
        }

        createChanel();
        return () => {
            ws.removeEventListener('close', closeHandler);
            ws.close()
        }
    }, [])


    return (
        <div>
            Chat
            <Messages wsChanel={wsChanel}/>
            <AddMessageForm wsChanel={wsChanel}/>
        </div>
    );
};

export default Chat;