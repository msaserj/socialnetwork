import React, {useState} from 'react';
import {useAppDispatch} from "../../../../hooks/hooks";
import {TextAreaFormik} from "../../../00-Common/InputFormik/InputFormik";
import {Button} from "../../../00-Common/Button/Button";
import {sendMessageTC} from "../../../../redux/dialogs-reducer";
import css from "./SendMessage.module.scss"

type SendMessageType = {
    userId: number
}

const SendMessageForm: React.FC<SendMessageType> = ({userId}) => {
    const[message, setMessage] = useState('')


    const dispatch = useAppDispatch()
    console.log("SendMessageForm", userId)

    const sendMessageHandler = () => {
      if(!message) {
          return
      } else {
        dispatch(sendMessageTC(userId, message))
          setMessage('')
      }
    }

    return (
        <div className={css.sendMessage}>
            <div>
                <TextAreaFormik  onChange={(e)=>setMessage(e.currentTarget.value)} value={message} />
                {/*<textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>*/}
            </div>
            <div className={css.buttonBlock}>
                <Button onClick={sendMessageHandler}>Send</Button>
            </div>
        </div>
    );
};

export default SendMessageForm;