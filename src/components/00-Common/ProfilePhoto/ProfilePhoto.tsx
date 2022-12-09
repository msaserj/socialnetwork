import React from "react";
import css from "./ProfilePhoto.module.scss"
import {UserPhotosProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/profileImage.png";
import {PreloaderSmall} from "../PreloaderSmall/PreloaderSmall";

type ProfilePhotoType = {
    photos: UserPhotosProfileType | null

}

export const ProfilePhoto:React.FC<ProfilePhotoType> = (
    {
        photos, ...restProps
    }
) => {

    if (!photos) {
        return <PreloaderSmall/>  //если нет профайла то крутилка
    }
    return <img className={css.userPhoto} src={photos.small != null || undefined
                ? photos.small : userPhoto} {...restProps} alt=""/>
}
