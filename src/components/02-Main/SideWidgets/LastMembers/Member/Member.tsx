import React, {useState} from 'react';
import css from "./Member.module.scss"
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../../assets/images/avaSmith.png";
import {PreloaderSmall} from "../../../../00-Common/PreloaderSmall/PreloaderSmall";

type UsersComponentPropsType = {
    name: string
    photo: {small: string, large: string}
    id: number
}

export const Member: React.FC<UsersComponentPropsType> = ({name, id, photo}) => {
    const [showName, setShowName] = useState(false)
    if (!id) {
        return <PreloaderSmall/>  //если нет профайла то крутилка
    }
    return (
        <div className={css.member}>
           <NavLink onMouseLeave={()=>setShowName(false)} to={"/profile/" + id}>
                {showName && <div className={css.name}>{name}</div>}
               {photo && <img onMouseEnter={()=>setShowName(true)}
                              className={css.userPhoto} src={photo.small ? photo.small : userPhoto} alt=""/>}
            </NavLink>
        </div>
    )
}