import React from "react";
import css from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/auth-reducer";
import logo from "../../assets/images/logo.png"
import {Nav} from "./Nav/Nav";

type HeaderType = {
    authHeader: DataType
    logoutTC: () => void
    id: number
    avatar: { small: string, large: string }
    name: string
}

export const Header = (props: HeaderType) => {

    // const id = useAppSelector(state => state.myProfile.myProfile.userId)
    // const avatar = useAppSelector(state => state.myProfile.myProfile.photos)
    // const name = useAppSelector(state => state.myProfile.myProfile.fullName)
    //let data = props.authHeader.data
    const logoutHandler = () => {
        props.logoutTC()
    }
    return (
        <header className={css.header}>

            <div className={css.flexContainer}>
                <img src={logo} alt="logo"/>
                {!props.authHeader.id
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div className={css.profileBlock}>
                        <NavLink className={css.profile} to={"/profile/" + props.id}>
                            <img className={css.ava} src={props.avatar ? props.avatar.small : ""} alt=""/>
                            <h3 className={css.name}>{props.name}</h3>
                        </NavLink>
                        <Nav logoutTC={props.logoutTC} id={props.id}/>
                    </div>
                }
            </div>
        </header>
    )
}