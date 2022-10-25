import React from 'react';
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {RootState} from "../../redux/redux-store";

const Login: React.FC<ProfilePropsType> = ({isAuth, loginTC, captchaUrl}) => {
    if(isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
           <h1>Login</h1>
            <LoginForm loginTC={loginTC} captchaUrl={captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captcha
    } as MapStateToPropsType
}

export default connect(mapStateToProps, {loginTC})(Login)


// types
type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: any
}

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: any, setSubmitting: any) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType