import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Message} from "./Message/Message";
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {ActionsType} from "../../redux/store";



type DialogType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    message: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageState: string
    dispatch: (action: ActionsType) => void
}


export const Dialogs = (props: DialogPageType) => {

    let dialogsElement = props.dialogs.map(el=> <DialogItem key={el.id} name={el.name}   id={el.id}/>);
    let messagesElement = props.messages.map(el=> <Message key={el.id} message={el.message} />);
    let newMessageState = props.newMessageState

    const onClickHandler = () => {
        props.dispatch(sendNewMessageAC(props.newMessageState))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updateNewMessageAC(e.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageState} onChange={onChangeHandler} placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}