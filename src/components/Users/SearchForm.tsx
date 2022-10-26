import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import React from "react";


const UsersSearchValidate = () => {
    // const errors = {};
    //
    // return errors;
}
type SearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}

export const SearchForm: React.FC<SearchFormType> = ({onFilterChanged}) => {

    const submit = (values: FilterType, { setSubmitting}:{ setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
        setSubmitting(false)
    }

  return(
      <div>
          <h1>Any place in your app!</h1>
          <Formik
              initialValues={{term: '', friend: false}}
              validate={UsersSearchValidate}
              onSubmit={submit}
          >
              {({ isSubmitting }) => (
                  <Form>
                      <Field type="text" name="term" />
                      <Field
                          component="select"
                          id="location"
                          name="friend">
                          <option value="null">All Users</option>
                          <option value="true">Followed</option>
                          <option value="false">No Followed</option>
                      </Field>
                      <button type="submit" disabled={isSubmitting}>
                          Find
                      </button>
                  </Form>
              )}
          </Formik>
      </div>
  )
}