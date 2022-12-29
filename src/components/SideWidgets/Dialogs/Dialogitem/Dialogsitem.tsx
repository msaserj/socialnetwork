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
                <NavLink to={path}>profile</NavLink>
            </div>

            <div>
                <div> {hasNewMessages ? <span style={{color: "limegreen"}}>Has New {newMessagesCount} messages</span> : ""}</div>
                <div>Activity {new Date(lastUserActivityDate).toLocaleString()}</div>
                <div>Dialog {new Date(lastDialogActivityDate).toLocaleString()}</div>
            </div>

        </div>
    )

})