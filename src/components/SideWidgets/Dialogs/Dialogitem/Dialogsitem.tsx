import React from "react";
import css from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType, putDialogTC} from "../../../../redux/dialogs-reducer";
import {Button} from "../../../00-Common/Button/Button";
import {useAppDispatch} from "../../../../hooks/hooks";
import avaNeo from "../../../../assets/images/avaNeo.png";

type DialogsItemType = {
    dialogItem: DialogsType
}

export const DialogItem: React.FC<DialogsItemType> = React.memo((
    {dialogItem}
) => {
    const {id, userName, photos,hasNewMessages, newMessagesCount, lastUserActivityDate, lastDialogActivityDate} = dialogItem
    const dispatch = useAppDispatch()
    let path = "/profile/" + id;
    const startChat = () => {
        dispatch(putDialogTC(id))
    }

    return <div className={css.activeLink}>
        <div>
            <Button onClick={startChat}>{userName}</Button>
        </div>
        <NavLink to={path}>
            <img style={{width: "80px", height: "80px", borderRadius: "50%", border: "3px solid grey"}}
                 src={photos.small != null ? photos.small : avaNeo} alt="PHOTO"/>
        </NavLink>

        <div>{id}</div>
        <div> {hasNewMessages? <span>Has New {newMessagesCount} messages</span>: <span>No messages</span>}</div>
        <div>Activity  { new Date(lastUserActivityDate).toLocaleString()}</div>
        <div>Dialog {  new Date(lastDialogActivityDate).toLocaleString() }</div>
    </div>

})