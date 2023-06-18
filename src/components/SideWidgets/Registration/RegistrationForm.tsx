import React from 'react';
import { useFormik } from 'formik';
import { CheckboxFormik, InputFormik } from '../../00-Common/InputFormik/InputFormik';
import css from './Registration.module.scss';
import { AuthButton } from '../../00-Common/AuthButton/AuthButton';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { PreloaderSmall } from '../../00-Common/PreloaderSmall/PreloaderSmall';

type FormikErrorType = {
  login?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
};

type RegistrationFormType = {
  registrTC: (
    login: string,
    email: string,
    password: string,
    acceptTerms: boolean,
    setStatus: any,
    setSubmitting: any
  ) => void;
};

export const RegistrationForm: React.FC<RegistrationFormType> = ({ registrTC }) => {
  const isFetching = useAppSelector(state => state.app.fetching);
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'required';
      } else if (values.password.trim().length < 4) {
        errors.password = 'min 4 symbols';
      }
      if (values.password !== values.confirmPassword) {
        errors.password = 'not equal passwords';
      }
      if (!values.acceptTerms) {
        // errors.acceptTerms = "Please read terms and accept it."
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      registrTC(
        values.login,
        values.email,
        values.password,
        values.acceptTerms,
        onSubmitProps.setStatus,
        onSubmitProps.setSubmitting
      );
      onSubmitProps.setSubmitting(true);
    }
  });
  const isAuth = useAppSelector(state => state.auth.data.id);
  if (isAuth) {
    return <Navigate to={'/profile/' + isAuth} />;
  }
  return (
    <form className={css.loginForm} onSubmit={formik.handleSubmit}>
      <p>
        <b>Attention!</b> It's just a registration form. Unfortunately, the API of this social network does not provide
        registration endpoints.
      </p>
      <p>
        If you want to see a regular user account, please login with: <b>Login:</b> free@samuraijs.com <b>Password:</b>{' '}
        free
      </p>
      <InputFormik
        mustFilled
        label={'login'}
        placeholder={'login'}
        getFieldProps={formik.getFieldProps('login')}
        errors={formik.errors.email}
        type={'text'}
      />
      <InputFormik
        mustFilled
        label={'email'}
        placeholder={'email'}
        getFieldProps={formik.getFieldProps('email')}
        errors={formik.errors.email}
        type={'text'}
      />
      <InputFormik
        mustFilled
        label={'password'}
        placeholder={'password'}
        getFieldProps={formik.getFieldProps('password')}
        errors={formik.errors.password}
        type={'password'}
      />
      <InputFormik
        mustFilled
        label={'confirm password'}
        placeholder={'confirm password'}
        getFieldProps={formik.getFieldProps('confirmPassword')}
        errors={formik.errors.password}
        type={'password'}
      />
      <CheckboxFormik mustFilled label={'Accept'} getFieldProps={formik.getFieldProps('acceptTerms')}>
        <a href="https://social-network.samuraijs.com/public-offer">public offer</a>
      </CheckboxFormik>

      <div className={css.fields}>{formik.status}</div>

      <div className={css.buttonBlock}>
        <AuthButton disabled={!formik.values.acceptTerms} type="submit">
          Sign Up
        </AuthButton>
        {isFetching && <PreloaderSmall />}
      </div>
    </form>
  );
};
