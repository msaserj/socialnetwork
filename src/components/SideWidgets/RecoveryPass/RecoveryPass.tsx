import React from 'react';
import { RootState } from '../../../redux/redux-store';
import { connect } from 'react-redux';
import { RecoveryPassForm } from './RecoveryPassForm';
import { recoveryTC } from '../../../redux/auth-reducer';

const RecoveryPass: React.FC<RecoveryPassPropsType> = () => {
  return (
    <>
      <RecoveryPassForm recoveryTC={() => {}} />
    </>
  );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  } as MapStateToPropsType;
};

export default connect(mapStateToProps, { recoveryTC })(RecoveryPass);

// types
type MapStateToPropsType = {
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  recoveryTC: (email: string, setStatus: any, setSubmitting: any) => void;
};

export type RecoveryPassPropsType = MapStateToPropsType & MapDispatchToPropsType;
