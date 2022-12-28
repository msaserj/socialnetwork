import React from "react";
import css from "./ProfileInfo.module.scss"
import {UserProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../00-Common/Preloader/Preloader";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePhoto} from "../../../00-Common/ProfilePhoto/ProfilePhoto";
import {useAppSelector} from "../../../../hooks/hooks";

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
    const edit = useAppSelector(state => state.profilePage.edit)
    const userId = useAppSelector(state => state.profilePage.userProfile.userId)
    const myId = useAppSelector(state => state.myProfile.myProfile.userId)


    if (!props.userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    const editable = edit && userId === myId
    return (
        <div>
            <div  className={css.descriptionBlock}>
                    <ProfilePhoto
                        photos={props.userProfile.photos}
                        isOwner={props.isOwner}
                        savePhoto={props.savePhoto}
                        getStatus={props.getStatus}
                        status={props.status}
                        updateStatus={props.updateStatus} name={props.userProfile?.fullName}/>

                {editable
                    ? <ProfileDataForm userProfile={props.userProfile} saveProfile={props.saveProfile} resultCode={props.resultCode}/>
                    : <ProfileData userProfile={props.userProfile} isOwner={props.isOwner}
                                   // goToEditMode={activateEditMode}
                    />}
            </div>
        </div>)
}
