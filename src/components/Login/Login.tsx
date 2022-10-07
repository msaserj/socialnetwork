import React from 'react';
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";

const Login = (props: ProfilePropsType) => {
    return (
        <div>
           <h1>Login</h1>
            <LoginForm loginTC={props.loginTC}/>
        </div>
    );
};

export default connect(null, {loginTC})(Login)

// types
type MapStateToPropsType = {

}

type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType