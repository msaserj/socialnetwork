import React, {ChangeEvent, useEffect, useState} from 'react';
import css from "./ProfileStatusWithHooks.module.scss"
import {InputFormik} from "../../../00-Common/InputFormik/InputFormik";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    getStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    const [showTitle, setShowTitle] = useState(false)

    const activateEditMode = () => {
        props.isOwner && setEditMode(true)
    }
    const deactivateEditMode = () => {
        props.updateStatus(status)
        setEditMode(false)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
        //"24212"
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div onMouseEnter={()=>props.isOwner && setShowTitle(true)} onMouseLeave={()=>setShowTitle(false)} className={css.statusBlock}>
                    {showTitle && <span onMouseLeave={()=>{setShowTitle(false)}} className={css.title}>Double Click to change</span>}
                    <span  className={css.status} onDoubleClick={activateEditMode}>{status}</span>
                </div>
            }
            {editMode && props.isOwner &&
                <div>
                    <InputFormik onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                           value={status} type="text" />
                </div>
            }
        </div>
    );
}
