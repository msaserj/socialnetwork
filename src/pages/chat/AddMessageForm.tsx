import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/hooks";
import {sendMessageTC} from "../../redux/chat-reducer";


const AddMessageForm: React.FC = () => {
    const[message, setMessage] = useState('')
    //const[readyState, setReadyState] = useState<'pending' | 'ready'>('pending')

    const dispatch = useAppDispatch()

    const sendMessageHandler = () => {
      if(!message) {
          return
      } else {
          dispatch(sendMessageTC(message))
          setMessage('')
      }
    }

    return (
        <div>
            <div>
                <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    );
};

export default AddMessageForm;