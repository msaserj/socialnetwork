import React from "react";
import css from "./ProfilePhoto.module.scss"
import {UserPhotosProfileType} from "../../../redux/profile-reducer";
import avaSmith from "../../../assets/images/avaSmith.png";
import avaNeo from "../../../assets/images/avaNeo.png";
import {PreloaderSmall} from "../PreloaderSmall/PreloaderSmall";

import {MdOutlinePhotoCamera} from "react-icons/md";
import {ProfileStatusWithHooks} from "../../SideWidgets/Profile/ProfileInfo/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avaSmith.png";

type ProfilePhotoType = {
    photos: UserPhotosProfileType
    isOwner: boolean
    savePhoto: (file: any) => void
    status: string
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    name: string
}

export const ProfilePhoto:React.FC<ProfilePhotoType> = (
    {
        photos, isOwner, savePhoto, status, updateStatus, getStatus, name, ...restProps
    }
) => {
    const avatar = isOwner? avaNeo : avaSmith

    const loadPhotoHandler = (e: any) => {
        if (e.target.files.length) {
            let file = e.target.files[0]
            savePhoto(file)
        }
    }

    if (!photos) {
        return <PreloaderSmall/>  //если нет профайла то крутилка
    }
    return (
        <div className={css.profilePhoto}>
            <div className={css.photoBlock}>

                <img className={css.userPhoto} src={photos.large != null ? photos.large : avatar} {...restProps} alt="avatar"/>

                {isOwner && <label className={css.divinput}>
                    <input  about={"rerer"} className={css.photoInput} type={"file"} onChange={loadPhotoHandler}/><MdOutlinePhotoCamera/></label>}
            </div>
            <div className={css.nameStatus}>
                <h3 className={css.profileHeader}>{name}</h3>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} getStatus={getStatus} isOwner={isOwner}/>
            </div>

        </div>
    )
}
