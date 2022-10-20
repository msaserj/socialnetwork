import React from "react";

type InputFormikType = {
    htmlFor: string
    label: string
    getFieldProps: any
    errors: any
}

export const InputFormik = (props: InputFormikType) => {
  return  <div><label htmlFor={props.htmlFor}>{props.label}</label>
      <input id={props.htmlFor} type={props.htmlFor} {...props.getFieldProps}/>
      {props.errors ? <div>{props.errors}</div> : null}
  </div>
}
