import React from 'react';
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {RegistrationForm} from "./RegistrationForm";
import {registrTC} from "../../../redux/auth-reducer";

const Registration:React.FC<RegistrationPropsType> = () => {
    return (
        <>
            <RegistrationForm registrTC={()=>{}}/>
        </>
    );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    } as MapStateToPropsType
}

export default connect(mapStateToProps, {registrTC})(Registration)


// types
type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    registrTC: (login: string, email: string, password: string, acceptTerms: boolean, setStatus: any, setSubmitting: any) => void
}

export type RegistrationPropsType = MapStateToPropsType & MapDispatchToPropsType

