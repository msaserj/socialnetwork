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
        if (e.target.files.length) {
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
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}
                                    getStatus={props.getStatus}/>
            <div className={classes.descriptionBlock}>
                {/*<img className={classes.userPhoto} src={data.photos ? data.photos.large : userPhoto} alt=""/>*/}

                pic<img className={classes.userPhoto} src={data.photos != null || undefined
                ? data.photos.small : userPhoto} alt=""/>

                {props.isOwner && <input type={"file"} onChange={loadPhotoHandler}/>}

                <div><b>{data.fullName}</b></div>
                <div><b>About me: {data.aboutMe}</b></div>
                {data.lookingForAJob && <div>Ищу работу! <br/> {data.lookingForAJobDescription}</div>}
                <p><b>Contacts:</b></p>
                <ul>
                    {Object.keys(contacts).map(key => {
                        // @ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
                    })}
                </ul>

            </div>
        </div>)
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (<li><b>{contactTitle}:</b> {contactValue}</li>)
}


export const ProfileData = () => {

}