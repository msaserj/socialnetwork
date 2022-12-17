import React, {useState} from "react";
import css from "./ProfileInfo.module.scss"
import {UserProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../00-Common/Preloader/Preloader";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePhoto} from "../../../00-Common/ProfilePhoto/ProfilePhoto";

type ProfileType = {
    userProfile: UserProfileType | null
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: any, setStatus: any, setSubmitting: any) => void
    resultCode: number
}

export const ProfileInfo = (props: ProfileType) => {
    const [editMode, setEditMode] = useState<boolean>(false)


    if (!props.userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    let data = props.userProfile
    // console.log(props.isOwner)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }



    return (
        <div>
            

            <div className={css.descriptionBlock}>
                {/*<img className={classes.userPhoto} src={data.photos ? data.photos.large : userPhoto} alt=""/>*/}
                <div className={css.photo}>
                    <ProfilePhoto
                        photos={data.photos}
                        isOwner={props.isOwner}
                        savePhoto={props.savePhoto}
                        getStatus={props.getStatus}
                        status={props.status}
                        updateStatus={props.updateStatus} name={props.userProfile?.fullName}/>
                </div>

                {editMode
                    ? <ProfileDataForm userProfile={props.userProfile} saveProfile={props.saveProfile}
                                       deactivateEditMode={deactivateEditMode} resultCode={props.resultCode}/>
                    : <ProfileData userProfile={props.userProfile} isOwner={props.isOwner}
                                   goToEditMode={activateEditMode}/>}
            </div>
        </div>)
}