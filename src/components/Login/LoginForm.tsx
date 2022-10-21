
import React from 'react';
import { useFormik } from 'formik';
import css from './LoginForm.module.css'

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
            } else if (values.password.trim().length < 5) {
                errors.password = "min 5 symbols"
            }
            return errors;
        },
        onSubmit: (values,onSubmitProps) => {
            loginTC(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
            onSubmitProps.setSubmitting(true);
            // alert(JSON.stringify(values));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={css.fields}> <label htmlFor="email">Email</label>
                <input id="email" type="email"
                    {...formik.getFieldProps("email")}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
            <div  className={css.fields}> <label htmlFor="password">Password</label>
                <input id="password" type="password"
                    {...formik.getFieldProps("password")}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
            <div  className={css.fields}> <label htmlFor="RememberMe">Remember Me</label>
                <input id="checkbox" type="checkbox"
                    {...formik.getFieldProps("rememberMe")}
                    checked={formik.values.rememberMe}
                />
                {formik.errors.rememberMe ? <div>{formik.errors.rememberMe}</div> : null}</div>
            <div  className={css.fields}>
                {formik.status}

                {captchaUrl &&
                    <div className={css.fields}>
                    <img src={captchaUrl} alt="captchaUrl"/>
                    <label htmlFor="captcha">Captcha</label>
                    <input id="captcha" type="text"
                {...formik.getFieldProps("captcha")}
                    />
                {formik.errors.captcha ? <div>{formik.errors.captcha}</div> : null}</div>
                }
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};