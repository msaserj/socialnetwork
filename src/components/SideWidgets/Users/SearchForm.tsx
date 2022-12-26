import {useFormik} from "formik";
import {FilterType} from "../../../redux/users-reducer";
import React, {useEffect} from "react";
import {useAppSelector} from "../../../hooks/hooks";
import {InputFormik, SelectFormik} from "../../00-Common/InputFormik/InputFormik";
import css from "./SearchForm.module.scss"
import {AuthButton} from "../../00-Common/AuthButton/AuthButton";


type FormikErrorType = {
    term?: string
    friend?: boolean | null
}


type SearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}

export const SearchForm: React.FC<SearchFormType> = ({onFilterChanged}) => {

    const filter = useAppSelector(state => state.usersPage.filter)


    const selectOptions = [
        {value: "null", title: "All Users"},
        {value: "true", title: "Friends"}, {
        value: "false", title: "Not Friends"}]

    const formik = useFormik({
        initialValues: {
            term: '',
            friend: null
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            // if (!values.term) {
            //     errors.term = 'Required';
            // }
            return errors
        },
        onSubmit: (values, onSubmitProps) => {
            onFilterChanged(values)
            onSubmitProps.setSubmitting(true);
        },

    });
    useEffect(()=>{
        formik.setFieldValue("term", filter.term)
        formik.setFieldValue("friend", filter.friend)
    },[filter.friend])

    return (
        <div>
            <form className={css.searchBlock} onSubmit={formik.handleSubmit}>
                <div className={css.element}>
                    <InputFormik placeholder={"search"} getFieldProps={formik.getFieldProps("term")}
                                 type={"text"}/>
                </div>
                <div>
                    <SelectFormik selectOptions={selectOptions} {...formik.getFieldProps("friend")}/>
                </div>
                <div>
                    <AuthButton type="submit">Search</AuthButton>
                    {/*{isFetching && <PreloaderSmall/>}*/}
                </div>

            </form>
        </div>


    )
}