import React from "react";
import {DialogPageType, sendNewMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}
type mapDispatchToPropsType = {
    updateTextNewMessage: (text: string) => void
    addMessageHandler: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage,
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

// export type DialogsType = {
//     id: string
//     name: string
// }
// export type MessageType = {
//     id: string
//     message: string
// }
