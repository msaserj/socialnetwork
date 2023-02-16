import React, { useEffect } from 'react';
import AddMessageForm from './AddMessageForm';
import Messages from './Messages';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { startMessagesListeningTC, stopMessagesListeningTC } from '../../redux/chat-reducer';
import css from './Chat.module.scss';

const Chat: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListeningTC());
    return () => {
      dispatch(stopMessagesListeningTC());
    };
  }, [dispatch]);

  return (
    <div>
      {status === 'error' ? (
        <div>Some error</div>
      ) : (
        <div>
          <Messages />
          <AddMessageForm />
        </div>
      )}
    </div>
  );
};

export default Chat;
