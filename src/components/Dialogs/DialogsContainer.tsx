import React from "react";
import {DialogPageType, addMessageOnClick, newTextMessageOnChange} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    newTextMessageOnChange: (text: string) => void
    addMessageOnClick: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {newTextMessageOnChange, addMessageOnClick})(Dialogs)