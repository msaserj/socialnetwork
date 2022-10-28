import React, {useState} from 'react';
import {ws} from "./Messages";


const AddMessageForm: React.FC = () => {
    const[message, setMessage] = useState('')
    const sendMessage = () => {
      if(!message) {
          return
      } else {
          ws.send(message)
          setMessage('')
      }
    }
    return (
        <div>
            <div>
                <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AddMessageForm;