import React from 'react';
import {useFormik} from 'formik';
import {CheckboxFormik, InputFormik} from "../../00-Common/InputFormik/InputFormik";
import css from "./LoginForm.module.scss"
import {AuthButton} from "../../00-Common/AuthButton/AuthButton";
import {Navigate, NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/hooks";
import {PreloaderSmall} from "../../00-Common/PreloaderSmall/PreloaderSmall";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string
}

type LoginFormType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: any, setSubmitting: any) => void
    captchaUrl: string | null
}

export const LoginForm: React.FC<LoginFormType> = ({loginTC, captchaUrl}) => {
    const isFetching = useAppSelector(state => state.app.fetching)
    console.log("RERENDER")
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'required';
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'invalid email address';
            }
            if (!values.password) {
                errors.password = 'required'
            } else if (values.password.trim().length < 4) {
                errors.password = "min 4 symbols"
            }
            return errors
        },
        onSubmit: (values, onSubmitProps) => {
            loginTC(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
            onSubmitProps.setSubmitting(true);
        },
    });
    const isAuth = useAppSelector(state => state.auth.data.id)
    if (isAuth) {
        return <Navigate to={"/profile/" + isAuth}/>
    }
    console.log(isFetching)
    const onCancelClick = () => {
        formik.resetForm();
        formik.setTouched({});
    };
    return (

        <form className={css.loginForm} onSubmit={formik.handleSubmit}>
            <InputFormik placeholder={"email"} getFieldProps={formik.getFieldProps("email")}
                         errors={formik.errors.email} type={"text"}/>
            <InputFormik placeholder={"password"} getFieldProps={formik.getFieldProps("password")}
                         errors={formik.errors.password} type={"password"}/>

            <CheckboxFormik label={"Remember Me"} getFieldProps={formik.getFieldProps("rememberMe")}/>


            {formik.status && <span style={{color: "red"}}>{formik.status}</span>}
            {captchaUrl &&
                <div className={css.fields}>
                    <img src={captchaUrl} alt="captchaUrl"/>
                    <InputFormik  placeholder={"captcha"} getFieldProps={formik.getFieldProps("captcha")}
                                 errors={formik.errors.email} type={"text"}/>
                    {formik.errors.captcha ? <div>{formik.errors.captcha}</div> : null}</div>
            }

            <div className={css.buttonBlock}>

                <AuthButton type="submit">Login</AuthButton>
                {isFetching && <PreloaderSmall/>}
                <div className={css.forgot}>
                    <NavLink className={css.navlink} onClick={onCancelClick} to={"/registr"}>Register account</NavLink>
                    <NavLink className={css.navlink} onClick={onCancelClick} to={"/recovery"}>Forget password</NavLink>
                </div>
            </div>
        </form>
    );
};