import React from "react";
import {DialogPageType, addMessageOnClick, newTextMessageOnChange} from "../../redux/dialogs-reducer";
import {RootState} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    newTextMessageOnChange: (text: string) => void
    addMessageOnClick: () => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    } as MapStateToPropsType
}

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options

export const DialogsContainer = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>
    (mapStateToProps, {newTextMessageOnChange, addMessageOnClick}),
    WithAuthRedirect
)(Dialogs)

