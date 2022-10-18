import React from "react";
import classes from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/profileImage.png";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileType = {
    userProfile: UserProfileType | null
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const ProfileInfo = (props: ProfileType) => {
    if (!props.userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    let data = props.userProfile
    let contacts = props.userProfile.contacts
    console.log(props.isOwner)

    const loadPhotoHandler = (e: any) => {
        if(e.target.files.length){
           let file = e.target.files[0]
            props.savePhoto(file)
        }
    }
    return (


        <div>

            <div>
                <img className={classes.bgc} src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg"
                     alt="la_batie"/>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus}/>
            <div className={classes.descriptionBlock}>
                {/*<img className={classes.userPhoto} src={data.photos ? data.photos.large : userPhoto} alt=""/>*/}

                pic<img className={classes.userPhoto} src={data.photos != null || undefined
                    ? data.photos.small : userPhoto} alt=""/>

                {props.isOwner && <input type={"file"} onChange={loadPhotoHandler}/>}

                <div>{data.fullName}</div>
                <div><p>About me: {data.aboutMe}</p></div>
                {data.lookingForAJob && <div>Ищу работу! <br/> {data.lookingForAJobDescription}</div>}
                    <p>Contacts:</p>
                    <ul>
                        {contacts && <li>facebook: {contacts.facebook}</li>}
                        {contacts && <li>vk: {contacts.vk}</li>}
                        {contacts && <li>instagram: {contacts.instagram}</li>}
                        {contacts && <li>twitter: {contacts.twitter}</li>}
                        {contacts && <li>youtube: {contacts.youtube}</li>}
                        {contacts && <li>github: {contacts.github}</li>}
                        {contacts && <li>mainLink: {contacts.mainLink}</li>}
                        {contacts && <li>website: {contacts.website}</li>}
                    </ul>
                </div>

        </div>)
}