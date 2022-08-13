import React from "react";
import {DialogPageType, newMessageOnClickAC, newMessageOnChangeAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogPageType
}
type MapDispatchToPropsType = {
    newTextMessageOnChange: (text: string) => void
    addMessageOnClick: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newTextMessageOnChange: (text: string)=>{
            let action = newMessageOnChangeAC(text)
            dispatch(action)
        },
        addMessageOnClick: ()=>{
            dispatch(newMessageOnClickAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)