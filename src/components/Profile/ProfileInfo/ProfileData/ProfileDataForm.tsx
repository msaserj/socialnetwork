import React from "react";
import {UserProfileType} from "../../../../redux/profile-reducer";
import {useFormik} from "formik";
import {InputFormik} from "./InputFormik";


type ProfileDataFormType = {
    userProfile: UserProfileType | null

}
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const ProfileDataForm: React.FC<ProfileDataFormType> = ({userProfile}) => {
    // if (!userProfile) {
    //     return <Preloader/>  //если нет профайла то крутилка
    // }

    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false,
                fullName: '',
                aboutMe: '',
                // Contacts:
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            onSubmit: (values, onSubmitProps) => {

                // alert(JSON.stringify(values));
            },
        })
    ;

    // let contacts = userProfile.contacts
    let data = userProfile
    return (<div>
        form
        {/*<div><p><b>{data.fullName}</b></p></div>*/}
        {/*<div><p><b>About me:</b> {data.aboutMe}</p></div>*/}

        {/*{data.lookingForAJob && <div>Ищу работу! <br/> {data.lookingForAJobDescription}</div>}*/}

        {/*<p><b>Contacts:</b></p>*/}
        {/*<ul>*/}
        {/*    {Object.keys(contacts).map(key => {*/}

        {/*        // @ts-ignore*/}
        {/*        return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>*/}
        {/*    })}*/}
        {/*</ul>*/}
        <form onSubmit={formik.handleSubmit}>
            <InputFormik htmlFor={"email"} label={"Email"} getFieldProps={formik.getFieldProps("email")} errors={formik.errors.email}/>



            <div>
                {formik.status}
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>)
}


// export const LoginForm: React.FC<LoginFormType> = ({loginTC}) => {
//     console.log("RERENDER")
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             rememberMe: false
//         },
//         validate: (values) => {
//             const errors: FormikErrorType = {};
//             if (!values.email) {
//                 errors.email = 'required';
//             } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'invalid email address';
//             }
//             if (!values.password) {
//                 errors.password = 'required'
//             } else if (values.password.trim().length < 5) {
//                 errors.password = "min 5 symbols"
//             }
//             return errors;
//         },
//         onSubmit: (values,onSubmitProps) => {
//             loginTC(values.email, values.password, values.rememberMe, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
//             onSubmitProps.setSubmitting(true);
//             // alert(JSON.stringify(values));
//         },
//     });
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div className={css.fields}> <label htmlFor="email">Email</label>
//                 <input id="email" type="email"
//                        {...formik.getFieldProps("email")}
//                 />
//                 {formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
//             <div  className={css.fields}> <label htmlFor="password">Password</label>
//                 <input id="password" type="password"
//                        {...formik.getFieldProps("password")}
//                 />
//                 {formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
//             <div  className={css.fields}> <label htmlFor="RememberMe">Remember Me</label>
//                 <input id="checkbox" type="checkbox"
//                        {...formik.getFieldProps("rememberMe")}
//                        checked={formik.values.rememberMe}
//                 />
//                 {formik.errors.rememberMe ? <div>{formik.errors.rememberMe}</div> : null}</div>
//             <div  className={css.fields}>
//                 {formik.status}
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     );
// };