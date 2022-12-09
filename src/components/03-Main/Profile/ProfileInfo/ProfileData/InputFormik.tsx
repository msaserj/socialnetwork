import React from "react";

type InputFormikType = {
    type?: string
    htmlFor: string
    label: string
    getFieldProps: any
    errors: any
    placeholder?: string
}

export const InputFormik = (props: InputFormikType) => {
  return(
      <div>
          <div><label htmlFor={props.htmlFor}>{props.label}</label></div>
          <input placeholder={props.placeholder} id={props.htmlFor} type={props.type} {...props.getFieldProps}/>{props.errors ? props.errors : null}
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