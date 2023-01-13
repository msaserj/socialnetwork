import React from "react";
import css from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";
import {DialogsType, putDialogTC} from "../../../../redux/dialogs-reducer";
import {useAppDispatch} from "../../../../hooks/hooks";
import avaNeo from "../../../../assets/images/avaNeo.png";
import { dateAgo, isOnline} from "../../../../utils/BeautyData/BeautyData";

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


    const lastActivity = dateAgo(lastUserActivityDate)
    const lastDialog = dateAgo(lastDialogActivityDate)

    return (
        <div className={css.dialogBlock}>

            <div onClick={startChat} className={css.photoBlock}>
                <img className={css.userPhoto}
                     src={photos.small != null ? photos.small : avaNeo} alt="avatar"/>
                {isOnline(lastUserActivityDate) && <div className={css.online}></div>}
            </div>

            <div className={css.aboutBlock}>
                <div className={css.about}>
                    <NavLink to={path} title={"see profile"}>
                        <h5 className={css.name}>{userName}</h5>
                    </NavLink>

                    <h6>Last: <span>{lastActivity}</span></h6>
                    <h6>Dialog: <span>{lastDialog}</span></h6>
                </div>

                <div className={css.newMessages}> {hasNewMessages ?
                    <span style={{color: "limegreen"}}>New {newMessagesCount} messages</span> : ""}</div>
            </div>

        </div>
    )

})