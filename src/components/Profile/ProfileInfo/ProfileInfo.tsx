import React from "react";
import classes from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/profileImage.png";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileType = {
    userProfile: UserProfileType | null
}

export const ProfileInfo = (props: ProfileType) => {
    if (!props.userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    let data = props.userProfile
    let contacts = props.userProfile.contacts

    return (

        <div>

            <div>
                <img className={classes.bgc} src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg"
                     alt="la_batie"/>
            </div>
            <ProfileStatus status="status"/>
            <div className={classes.descriptionBlock}>
                <img className={classes.userPhoto} src={data.photos != null
                    ? data.photos.small : userPhoto} alt=""/>
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