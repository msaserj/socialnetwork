import React from "react";
import css from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/auth-reducer";
import logo from "../../assets/images/logo.png"
import {Nav} from "./Nav/Nav";
import {UserPhotosProfileType} from "../../redux/profile-reducer";
import avaNeo from "../../assets/images/avaNeo.png"

type HeaderType = {
    authHeader: DataType
    logoutTC: () => void
    id: number
    avatar: UserPhotosProfileType
    name: string
}

export const Header = (props: HeaderType) => {

    //let data = props.authHeader.data
    console.log("header", props.authHeader.id)
    return (
        <header className={css.header}>

            <div className={css.flexContainer}>
                <img src={logo} alt="logo"/>
                {!props.authHeader.id
                    ? <NavLink to={'/registr'}>Registration</NavLink>
                    : <div className={css.profileBlock}>
                        <NavLink className={css.profile} to={"/profile/" + props.id}>
                            <img className={css.ava} src={props.avatar.small ? props.avatar.small : avaNeo} alt="avaNeo"/>
                            <h3 className={css.name}>{props.name}</h3>
                        </NavLink>
                        <Nav logoutTC={props.logoutTC} id={props.id}/>
                    </div>
                }
            </div>
        </header>
    )
}