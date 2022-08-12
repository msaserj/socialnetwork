import React from "react";
import {DialogPageType, sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}
type mapDispatchToPropsType = {
    updateTextNewMessage: (text: string) => void
    addMessageHandler: () => void
}

// export const DialogsContainer = (props: DialogPageType) => {
//
//     let state = props.state.dialogsPage
//
//     const onChangeHandler = (text: string) => {
//         let action = updateNewMessageAC(text)
//         props.dispatch(action)
//     }
//     const onClickHandler = () => {
//         props.dispatch(sendNewMessageAC(state.newMessageState))
//     }
//
//
//     return (
//        <Dialogs
//            updateTextNewMessage={onChangeHandler}
//            addMessageHandler={onClickHandler}
//            dialogs={state.dialogs}
//            messages={state.messages}
//            newMessageState={state.newMessageState}/>
//     )
// }

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateTextNewMessage: (text: string)=>{
            let action = updateNewMessageAC(text)
            dispatch(action)
        },
        addMessageHandler: ()=>{
            dispatch(sendNewMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)