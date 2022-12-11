import React, {useState} from 'react';
import css from "./Member.module.scss"
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/profileImage.png";
import {PreloaderSmall} from "../../00-Common/PreloaderSmall/PreloaderSmall";

type UsersComponentPropsType = {
    usersComponent: UserType
}

export const Member: React.FC<UsersComponentPropsType> = ({usersComponent}) => {
    const [showName, setShowName] = useState(false)
    let usr = usersComponent
    if (!usersComponent) {
        return <PreloaderSmall/>  //если нет профайла то крутилка
    }
    return (
        <div className={css.member}>
           <NavLink onMouseLeave={()=>setShowName(false)} to={"/profile/" + usr.id}>
                {showName && <div className={css.name}>{usr.name}</div>}
               {usr.photos && <img  onMouseEnter={()=>setShowName(true)} className={css.userPhoto} src={usr.photos.small != null
                    ? usr.photos.small : userPhoto} alt=""/>}
            </NavLink>
        </div>
    )
}