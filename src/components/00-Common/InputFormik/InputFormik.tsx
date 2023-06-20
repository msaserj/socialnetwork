import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import css from './InputFormik.module.scss';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SelectOptionsType = {
  value: string | number;
  title: string | number;
};
type InputFormikType = InputPropsType & {
  type?: string;
  htmlFor?: string;
  label?: string;
  getFieldProps?: any;
  errors?: any;
  placeholder?: string;
  children?: ReactNode;
  mustFilled?: boolean;
  selectOptions?: Array<SelectOptionsType>;
};

export const InputFormik: React.FC<InputFormikType> = ({
  type,
  htmlFor,
  label,
  getFieldProps,
  errors,
  placeholder,
  mustFilled,
  ...restProps
}) => {
  return (
    <div className={css.form}>
      {label && (
        <label className={css.label} htmlFor={htmlFor}>
          {label} {mustFilled && <span> *</span>}
        </label>
      )}
      <div className={css.inputBlock}>
        <input
          className={css.input}
          placeholder={placeholder}
          id={htmlFor}
          type={type}
          {...getFieldProps}
          {...restProps}
        />
        <div className={css.errorField}>
          <span>{errors ? errors : null}</span>
        </div>
      </div>
    </div>
  );
};
export const TextAreaFormik: React.FC<InputFormikType> = ({
  type,
  htmlFor,
  label,
  getFieldProps,
  errors,
  placeholder,
  ...restProps
}) => {
  return (
    <div className={css.form}>
      {/*<div><label htmlFor={props.htmlFor}>{props.label}</label></div>*/}
      <div className={css.inputBlock}>
        <textarea className={`${css.input} ${css.textarea}`} id={htmlFor} {...getFieldProps} {...restProps} />
        <div className={css.errorField}>
          <span>{errors ? errors : null}</span>
        </div>
      </div>
    </div>
  );
};
export const CheckboxFormik = (props: InputFormikType) => {
  return (
    <div>
      <div className={css.checkboxBlock}>
        <input className={css.checkbox} placeholder={props.placeholder} type={'checkbox'} {...props.getFieldProps} />
        <label className={css.labelCheckbox} htmlFor={props.htmlFor}>
          {props.label} {props.children}
        </label>
      </div>
      <div className={css.errorField}>
        <span>{props.errors ? props.errors : null}</span>
      </div>
    </div>
  );
};

export const SelectFormik: React.FC<InputFormikType> = ({
  htmlFor,
  label,
  getFieldProps,
  errors,
  selectOptions,
  ...restProps
}) => {
  return (
    <>
      {label && (
        <label className={css.label} htmlFor={htmlFor}>
          {label}{' '}
        </label>
      )}
      <select className={css.select} id={htmlFor} {...getFieldProps} {...restProps}>
        {selectOptions &&
          selectOptions.map((e, i) => {
            return (
              <option key={i} className={css.option} value={e.value}>
                {e.title}
              </option>
            );
          })}
      </select>
    </>
  );
};
