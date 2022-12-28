import React, {useEffect} from "react";
import {UserProfileType} from "../../../../../redux/profile-reducer";
import {useFormik} from "formik";
import {CheckboxFormik, InputFormik} from "../../../../00-Common/InputFormik/InputFormik";
import {AuthButton} from "../../../../00-Common/AuthButton/AuthButton";

import css from "./ProfileDataForm.module.scss"


type ProfileDataFormType = {
    userProfile: UserProfileType | null
    saveProfile: (profile: any, setStatus: any, setSubmitting: any) => void
    deactivateEditMode: () => void
    resultCode: number
    message: string[]
}
type FormikErrorType = {
    fullName?: string
    aboutMe?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    contacts: {
        facebook?: string
        website?: string
        vk?: string
        twitter?: string
        instagram?: string
        youtube?: string
        github?: string
        mainLink?: string
    }
}

export const ProfileDataForm: React.FC<ProfileDataFormType> = (
    {userProfile, saveProfile, deactivateEditMode, resultCode, message

                                                               }) => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            aboutMe: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            }
        },

        onSubmit: async (values, onSubmitProps) => {
            const values2 = {...values, contacts: {...values.contacts}}
            for (let key in values2.contacts) {
                // @ts-ignore
                let contact = values2.contacts[key]
                contact = contact.length? `https://` + contact : ""
            }
            saveProfile(values2, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
            await onSubmitProps.setSubmitting(true);
            if (resultCode === 0) {
                formik.resetForm()
            }
        },
    });

    useEffect(() => {
        if (userProfile) {
            formik.setFieldValue("fullName", userProfile.fullName)
            formik.setFieldValue("aboutMe", userProfile.aboutMe)
            formik.setFieldValue("lookingForAJob", userProfile.lookingForAJob)
            formik.setFieldValue("lookingForAJobDescription", userProfile.lookingForAJobDescription)
            // formik.setFieldValue("facebook", userProfile.contacts.facebook)

            userProfile && Object.keys(userProfile.contacts).map(key => {
                // @ts-ignore
                const item = userProfile.contacts[key]
                const pref = (item.slice(0, 8) === "https://")
                return formik.setFieldValue("contacts." + key, pref? item.slice(8) : item)
            })
        }
    }, [userProfile])
    return (
        <form className={css.formBlock} onSubmit={formik.handleSubmit}>
            <InputFormik htmlFor={"fullName"} label={"Full Name"} getFieldProps={formik.getFieldProps("fullName")}
                         errors={formik.errors.fullName} type={"text"}/>

            <InputFormik htmlFor={"aboutMe"} label={"About Me"} getFieldProps={formik.getFieldProps("aboutMe")}
                         errors={formik.errors.aboutMe} type={"textarea"}/>

            <CheckboxFormik htmlFor={"lookingForAJob"} label={"Looking For AJob"}
                            getFieldProps={formik.getFieldProps("lookingForAJob")}
                            errors={formik.errors.lookingForAJob}/>

            <InputFormik htmlFor={"lookingForAJobDescription"} label={"Job description"}
                         getFieldProps={formik.getFieldProps("lookingForAJobDescription")}
                         errors={formik.errors.lookingForAJobDescription}/>

            <ul>
                {userProfile && Object.keys(userProfile.contacts).map(key => {
                    // @ts-ignore
                    return <InputFormik key={key} htmlFor={key} label={key}
                                        getFieldProps={formik.getFieldProps("contacts." + key)}
                                        errors={formik.errors.contacts} type={"text"}/>
                })}
            </ul>
            {resultCode !== 0 && message.map(e => <div style={{color: "red"}}>{e}</div>)}
            <div>
                {formik.status}
                <AuthButton type="submit">Save Changes</AuthButton>
            </div>
        </form>)
}