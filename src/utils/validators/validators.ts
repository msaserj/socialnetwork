
export const RequiredField = (value: any) => {
    if  (value) return undefined
    return "Field is required"
}


// validator creator for old redux-form
//now we use formik with build in validation opts
export const MaxLengthCreator = (maxlength: number) => (value: string) => {
    if  (value.length > maxlength) return `Max length ${maxlength} symbols`
}