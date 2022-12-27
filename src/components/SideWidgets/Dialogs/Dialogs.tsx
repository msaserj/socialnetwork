import React, {useEffect} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Messages} from "./Message/Messages";
import {DialogsType, getDialogsTC, MessageItemType} from "../../../redux/dialogs-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import SendMessageForm from "./Message/SendMessageForm";


type DialogsPageType = {
    newTextMessageOnChange: (newMessageText: string) => void
    addMessageOnClick: () => void
    isAuth: boolean
    dialogs: Array<DialogsType>
    messages: Array<MessageItemType>
    getDialogs: () => void
}

export const Dialogs = (props: DialogsPageType) => {

    const dispatch = useAppDispatch()
    const dialogss = useAppSelector(state => state.dialogsPage.dialogs)
    const messagess = useAppSelector(state => state.dialogsPage.messages)
    const userId = useAppSelector(state => state.dialogsPage.userId)



    useEffect(() => {
        dispatch(getDialogsTC())
    }, [dispatch])
    console.log("dialogs", props.dialogs)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogss && dialogss.map(el => <DialogItem key={el.id} dialogItem={el}/>)}
            </div>
            <div className={classes.messages}>
                <Messages messagess={messagess}/>
                <SendMessageForm userId={userId}/>
            </div>
        </div>
    )
}