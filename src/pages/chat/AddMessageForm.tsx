import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { sendMessageTC } from '../../redux/chat-reducer';
import { TextAreaFormik } from '../../components/00-Common/InputFormik/InputFormik';
import { Button } from '../../components/00-Common/Button/Button';

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const status = useAppSelector(state => state.chat.status);

  const dispatch = useAppDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
    } else {
      dispatch(sendMessageTC(message));
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        <TextAreaFormik onChange={e => setMessage(e.currentTarget.value)} value={message} />
        {/*<textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>*/}
      </div>
      <div>
        <Button disabled={status !== 'ready'} onClick={sendMessageHandler}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default AddMessageForm;
