import React, {useEffect, useRef, useState} from "react";
import css from './Dialogs.module.scss'
import {DialogItem} from "./Dialogitem/Dialogsitem";
import {Message} from "./Message/Message";
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

export const Dialogs = React.memo((props: DialogsPageType) => {

    const dispatch = useAppDispatch()
    const dialogs= useAppSelector(state => state.dialogsPage.dialogs)
    const messages = useAppSelector(state => state.dialogsPage.messages)
    const userId = useAppSelector(state => state.dialogsPage.userId)
    const totalCount = useAppSelector(state => state.dialogsPage.totalCount)


    const [autoScroll, setAutoScroll] = useState(true)

    const [autoPage, setAutoPage] = useState(1)

    const topAnchorRef = useRef<HTMLDivElement>(null)
    const bottomAnchorRef = useRef<HTMLDivElement>(null)



    const scrollBottomHandler = (e: React.UIEvent<HTMLDivElement>) => {
        let element = e.currentTarget
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            !autoScroll && setAutoScroll(true)
            setAutoPage(autoPage-1)
            // dispatch(getMessagesListTC(userId, 10, autoPage))
        } else {
            autoScroll && setAutoScroll(false)
        }

        if(element.scrollTop < 0 && totalCount > autoPage*10) {
            setAutoPage(autoPage+1)
            // dispatch(getMessagesListTC(userId, 10, autoPage))
        }

    }
    useEffect(()=> {
        autoScroll && bottomAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    },[messages, autoScroll])


    useEffect(() => {
        dispatch(getDialogsTC())
    }, [dispatch, userId])
    return (
        <div className={css.dialogs}>
            <div style={{height: '650px', overflowY: 'auto'}} className={css.dialogWindow}>
                {dialogs && dialogs.map(el => <DialogItem key={el.id} dialogItem={el}/>)}
            </div>
            <div className={css.messagesWindow}>
                <div style={{height: '480px', overflowY: "auto"}} className={css.messages} onScroll={scrollBottomHandler} >
                    <div ref={topAnchorRef}></div>
                    {messages && messages.map(el => <Message key={el.id}  message={el} userId={userId}/>)}
                    <div ref={bottomAnchorRef}></div>
                </div>
                <SendMessageForm userId={userId}/>
            </div>
        </div>
    )
})