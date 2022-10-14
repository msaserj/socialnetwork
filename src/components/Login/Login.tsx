import React from 'react';
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

const Login: React.FC<ProfilePropsType> = ({isAuth, loginTC}) => {
    if(isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
           <h1>Login</h1>
            <LoginForm loginTC={loginTC}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login)


// types
type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, setStatus: any, setSubmitting: any) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType