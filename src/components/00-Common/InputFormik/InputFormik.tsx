import React from "react";
import css from "./InputFormik.module.scss"

type InputFormikType = {
    type?: string
    htmlFor?: string
    label?: string
    getFieldProps: any
    errors?: any
    placeholder?: string
}

export const InputFormik = (props: InputFormikType) => {
  return(
      <div>
          {/*<div><label htmlFor={props.htmlFor}>{props.label}</label></div>*/}
          <input className={css.input} placeholder={props.placeholder} id={props.htmlFor} type={props.type} {...props.getFieldProps}/>
          <div className={css.errorField}><span>{props.errors ? props.errors : null}</span></div>
      </div>
  )
}

export const CheckboxFormik = (props: InputFormikType) => {
    return(
        <div>
            <div className={css.checkboxBlock}>
                <input className={css.checkbox} placeholder={props.placeholder} type={"checkbox"} {...props.getFieldProps}/>
                <label htmlFor={props.htmlFor}>{props.label}</label>
            </div>
            <div><span>{props.errors ? props.errors : null}</span></div>
        </div>

    )
}


export const TextAreaFormik = (props: InputFormikType) => {
    return(
        <div>
            <div><label htmlFor={props.htmlFor}>{props.label}</label></div>
            <textarea id={props.htmlFor} {...props.getFieldProps}/>{props.errors ? props.errors : null}
        </div>
    )
}