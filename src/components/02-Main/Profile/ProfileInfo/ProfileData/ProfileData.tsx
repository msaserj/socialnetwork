import React from "react";
import {Preloader} from "../../../../00-Common/Preloader/Preloader";
import {Contact} from "./ContactsData";
import {UserProfileType} from "../../../../../redux/profile-reducer";


type ProfileDataType = {
    userProfile: UserProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}


export const ProfileData: React.FC<ProfileDataType> = (
    {
        userProfile,
        isOwner,
        goToEditMode

    }) => {
    if (!userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    let contacts = userProfile.contacts
    let data = userProfile

    return(<div>
        {isOwner && <div><button onClick={goToEditMode}>Edit Profile</button></div>}
        <div><p><b>Full Name:</b> {data.fullName}</p></div>
        <div><p><b>About me:</b> {data.aboutMe}</p></div>

        Looking for a job: {data.lookingForAJob && <div>Ищу работу! <br/> {data.lookingForAJobDescription}</div>}

        <p><b>Contacts:</b></p>
        <ul>
            {contacts && Object.keys(contacts).map(key => {
                    // @ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
            })}
        </ul>
    </div>)
}