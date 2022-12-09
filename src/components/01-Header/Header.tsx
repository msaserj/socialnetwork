import React from "react";
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";
import logo from "../../assets/images/logo.png"
import {Nav} from "./Nav/Nav";

type HeaderType = {
    authHeader: AuthType
    logoutTC: () => void
}

export const Header = (props: HeaderType) => {
    //let data = props.authHeader.data
    const logoutHandler = () => {
      props.logoutTC()
    }

    return (
        <header className={css.header}>
            <img src={logo} alt="logo"/>
            <Nav />

            <div className={css.loginBlock}>
                {!props.authHeader.isAuth
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>}

            </div>
        </header>
    )
}