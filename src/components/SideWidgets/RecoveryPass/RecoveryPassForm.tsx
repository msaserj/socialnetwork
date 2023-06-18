import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';
import css from './RecoveryPass.module.scss';
import { InputFormik } from '../../00-Common/InputFormik/InputFormik';
import { AuthButton } from '../../00-Common/AuthButton/AuthButton';
import { PreloaderSmall } from '../../00-Common/PreloaderSmall/PreloaderSmall';

type FormikErrorType = {
  login?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
};

type RecoveryFormType = {
  recoveryTC: (email: string, setStatus: any, setSubmitting: any) => void;
};

export const RecoveryPassForm: React.FC<RecoveryFormType> = ({ recoveryTC }) => {
  const isFetching = useAppSelector(state => state.app.fetching);
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      recoveryTC(values.email, onSubmitProps.setStatus, onSubmitProps.setSubmitting);
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
        <b>Attention!</b> It's just a recovery form. Unfortunately, the API of this social network does not provide
        recovery endpoints.
      </p>
      <p>
        If you want to see a regular user account, please login with: <b>Login:</b> free@samuraijs.com <b>Password:</b>{' '}
        free
      </p>
      <InputFormik
        mustFilled
        label={'email'}
        placeholder={'email'}
        getFieldProps={formik.getFieldProps('email')}
        errors={formik.errors.email}
        type={'text'}
      />

      <div className={css.fields}>{formik.status}</div>

      <div className={css.buttonBlock}>
        <AuthButton disabled={!!formik.errors.email} type="submit">
          Recover
        </AuthButton>
        {isFetching && <PreloaderSmall />}
      </div>
    </form>
  );
};
