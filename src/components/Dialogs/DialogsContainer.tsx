import React from "react";
import {sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppStoreType, DispatchStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
type DialogPageType = {
    dispatch: DispatchStoreType
    state: AppStoreType
}


export const DialogsContainer = (props: DialogPageType) => {

    let state = props.state.dialogsPage

    const onClickHandler = () => {
        props.dispatch(sendNewMessageAC(state.newMessageState))
    }
    const onChangeHandler = (text: string) => {
        let action = updateNewMessageAC(text)
        props.dispatch(action)
    }

    return (
       <Dialogs
           updateTextNewMessage={onChangeHandler}
           addMessageHandler={onClickHandler}
           dialogs={state.dialogs}
           messages={state.messages}
           newMessageState={state.newMessageState}/>
    )
}