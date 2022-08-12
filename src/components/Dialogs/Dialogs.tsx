import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/dialogs-reducer";


type DialogsPageType = {
    updateTextNewMessage: (newMessageText: string)=> void
    addMessageHandler: () => void

    dialogsPage: DialogPageType
 }


export const Dialogs = (props: DialogsPageType) => {


    let dialogsElement = props.dialogsPage.dialogs.map(el=> <DialogItem key={el.id} name={el.name}   id={el.id}/>);

    let messagesElement = props.dialogsPage.messages.map(el=> <Message key={el.id} message={el.message} />);
    let newMessageState = props.dialogsPage.newMessageState

    const onClickHandler = () => {
        props.addMessageHandler()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextNewMessage(e.currentTarget.value)
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
                        <textarea value={newMessageState} onChange={onChangeHandler} placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}