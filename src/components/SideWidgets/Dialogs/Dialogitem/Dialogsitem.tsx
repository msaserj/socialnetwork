import React from "react";
import css from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";
import {DialogsType, putDialogTC} from "../../../../redux/dialogs-reducer";
import {useAppDispatch} from "../../../../hooks/hooks";
import avaNeo from "../../../../assets/images/avaNeo.png";

type DialogsItemType = {
    dialogItem: DialogsType
}

export const DialogItem: React.FC<DialogsItemType> = React.memo((
    {dialogItem}
) => {
    const {
        id,
        photos,
        userName,
        hasNewMessages,
        newMessagesCount,
        lastUserActivityDate,
        lastDialogActivityDate
    } = dialogItem
    const dispatch = useAppDispatch()
    let path = "/profile/" + id;
    const startChat = () => {
        dispatch(putDialogTC(id))
    }

    return (
        <div className={css.dialogBlock}>

            <div onClick={startChat} className={css.photoBlock}>
                <img className={css.userPhoto}
                     src={photos.small != null ? photos.small : avaNeo} alt="avatar"/>
                {/*<div style={{color: "green"}}>online</div>*/}
            </div>

            <div className={css.aboutBlock}>
                <div className={css.about}>
                    <NavLink to={path} title={"see profile"}>
                        <h5 className={css.name}>{userName}</h5>
                    </NavLink>


                    <h6>Activity</h6>
                    <p>{new Date(lastUserActivityDate).toLocaleString
                    ("en", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                    })}</p>
                    <h6>Dialog</h6>
                    <p>{new Date(lastDialogActivityDate).toLocaleString
                    ("en", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                    })}</p>
                </div>

                <div className={css.newMessages}>. {hasNewMessages ?
                    <span style={{color: "limegreen"}}>Has New {newMessagesCount} messages</span> : ""}</div>
            </div>

        </div>
    )

})