import React, {useEffect} from "react";
import {UserProfileType} from "../../../../redux/profile-reducer";
import {useFormik} from "formik";
import {InputFormik, TextAreaFormik} from "./InputFormik";


type ProfileDataFormType = {
    userProfile: UserProfileType | null
    saveProfile: (profile: any,  setStatus: any, setSubmitting: any) => void
    deactivateEditMode: () => void
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

export const ProfileDataForm: React.FC<ProfileDataFormType> = ({userProfile, saveProfile, deactivateEditMode}) => {
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
        // validate: (values) => {
        //     const errors: FormikErrorType = {contacts:{}};
        //     // if (!values.contacts.facebook) {
        //     //     // @ts-ignore
        //     //     errors.contacts = 'required'
        //     // }
        //     // if (!values.contacts.vk) {
        //     //     // @ts-ignore
        //     //     errors.contacts = 'required'
        //     // }
        //     // if (!values.contacts.github) {
        //     //     // @ts-ignore
        //     //     errors.contacts = 'required'
        //     // }
        //     return errors;

            onSubmit: (values, onSubmitProps) => {

                saveProfile(values, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
                // console.log("value: ", JSON.stringify(values))
                onSubmitProps.setSubmitting(true);
                if(formik.isValid) {
                    formik.resetForm();
                    formik.setTouched({});
                    deactivateEditMode()
                }

            },
        });
    useEffect(()=>{
        if (userProfile) {
            formik.setFieldValue("fullName", userProfile.fullName)
            formik.setFieldValue("aboutMe", userProfile.aboutMe)
            formik.setFieldValue("lookingForAJob", userProfile.lookingForAJob)
            formik.setFieldValue("lookingForAJobDescription", userProfile.lookingForAJobDescription)
            formik.setFieldValue("facebook", userProfile.contacts.facebook)

            userProfile && Object.keys(userProfile.contacts).map(key => {
                // @ts-ignore
                return formik.setFieldValue("contacts." + key, userProfile.contacts[key])
            })
        }
    },[userProfile])
    return (<div>
        form
        <form onSubmit={formik.handleSubmit}>
            <InputFormik htmlFor={"fullName"} label={"Full Name"} getFieldProps={formik.getFieldProps("fullName")}
                         errors={formik.errors.fullName} type={"text"}/>
            <TextAreaFormik htmlFor={"aboutMe"} label={"About Me"} getFieldProps={formik.getFieldProps("aboutMe")}
                            errors={formik.errors.aboutMe} type={"textarea"}/>
            <InputFormik htmlFor={"lookingForAJob"} label={"Looking For AJob"} getFieldProps={formik.getFieldProps("lookingForAJob")}
                         errors={formik.errors.lookingForAJob} type={"checkbox"}/>
            <TextAreaFormik htmlFor={"lookingForAJobDescription"} label={"Job description"}
                            getFieldProps={formik.getFieldProps("lookingForAJobDescription")} errors={formik.errors.lookingForAJobDescription}/>

            <ul>
                {userProfile && Object.keys(userProfile.contacts).map(key => {
                    return <InputFormik key={key} htmlFor={key} label={key} getFieldProps={formik.getFieldProps("contacts." + key)}
                                        errors={formik.errors.contacts} type={"text"} placeholder={"https://"}/>
                })}
            </ul>
            <div>
                {formik.status}
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>)
}