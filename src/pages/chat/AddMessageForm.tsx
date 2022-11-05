import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {sendMessageTC} from "../../redux/chat-reducer";


const AddMessageForm: React.FC = () => {
    const[message, setMessage] = useState('')

    const status = useAppSelector(state => state.chat.status)

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
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    );
};

export default AddMessageForm;