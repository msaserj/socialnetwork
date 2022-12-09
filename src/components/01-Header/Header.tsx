import React from "react";
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType, DataType} from "../../redux/auth-reducer";
import logo from "../../assets/images/logo.png"
import {Nav} from "./Nav/Nav";
import {Button} from "../00-Common/Button/Button";

type HeaderType = {
    authHeader: DataType
    logoutTC: () => void
}

export const Header = (props: HeaderType) => {
    //let data = props.authHeader.data
    const logoutHandler = () => {
      props.logoutTC()
    }
    console.log(!props.authHeader.id)
    return (
        <header className={css.header}>
            <img src={logo} alt="logo"/>
            <Nav />

            <div className={css.loginBlock}>
                {!props.authHeader.id
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div>
                        <Button onClick={logoutHandler}>Logout</Button>
                    </div>}

            </div>
        </header>
    )
}