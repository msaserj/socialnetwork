import React from 'react';
import { newTextMessageOnChange, DialogsType, getDialogsTC, sendMessageTC } from '../../../redux/dialogs-reducer';
import { RootState } from '../../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type MapStateToPropsType = {
  dialogsPage: Array<DialogsType>;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  newTextMessageOnChange: (text: string) => void;
  sendMessageTC: (userId: number, messageBody: string) => void;
  getDialogsTC: () => void;
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth
  } as MapStateToPropsType;
};

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options

export const DialogsContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(mapStateToProps, {
    newTextMessageOnChange,
    sendMessageTC,
    getDialogsTC
  }),
  WithAuthRedirect
)(Dialogs);
