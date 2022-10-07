import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";

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
        <header className={classes.header}>
            <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg"
                alt="logo"/>
            <div className={classes.loginBlock}>
                {!props.authHeader.isAuth
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>}

            </div>
        </header>
    )
}