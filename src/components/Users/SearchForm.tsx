import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import React from "react";


const UsersSearchValidate = (values: any) => {
    const errors = {};

    return errors;
}
type SearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}

export const SearchForm: React.FC<SearchFormType> = ({onFilterChanged}) => {

    const submit = (values: FilterType, { setSubmitting}:{ setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
    }

  return(
      <div>
          <h1>Any place in your app!</h1>
          <Formik
              initialValues={{term: ''}}
              validate={UsersSearchValidate}
              onSubmit={submit}
          >
              {({ isSubmitting }) => (
                  <Form>
                      <Field type="text" name="term" />
                      <button type="submit" disabled={isSubmitting}>
                          Find
                      </button>
                  </Form>
              )}
          </Formik>
      </div>
  )
}