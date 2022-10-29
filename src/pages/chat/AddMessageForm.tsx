import React, {useEffect, useState} from 'react';


const AddMessageForm: React.FC<{wsChanel: WebSocket | null}> = ({wsChanel}) => {
    const[message, setMessage] = useState('')
    const[readyState, setReadyState] = useState<'pending' | 'ready'>('pending')

    const sendMessage = () => {
      if(!message) {
          return
      } else {
          wsChanel?.send(message)
          setMessage('')
      }
    }
    useEffect(()=>{
        let openHandler = () => {
            setReadyState('ready')
        }

        wsChanel?.addEventListener('open', openHandler)
        return ()=> {
            wsChanel?.removeEventListener('open', openHandler)
        }
    },[wsChanel])
    return (
        <div>
            <div>
                <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={readyState !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AddMessageForm;