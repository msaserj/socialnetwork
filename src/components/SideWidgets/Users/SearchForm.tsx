import {useFormik} from "formik";
import {FilterType} from "../../../redux/users-reducer";
import React from "react";
import {useAppSelector} from "../../../hooks/hooks";
import {InputFormik} from "../../00-Common/InputFormik/InputFormik";
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
    const formik = useFormik({
        initialValues: {
            term: '',
            friend: null
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.term) {
                errors.term = 'Required';
            }
            return errors
        },
        onSubmit: (values, onSubmitProps) => {
            onFilterChanged(values)
            onSubmitProps.setSubmitting(true);
        },
    });
    // const submit = (values: FilterType, { setSubmitting}:{ setSubmitting: (isSubmitting: boolean) => void }) => {
    //     onFilterChanged(values)
    //     setSubmitting(false)
    // }

    return (
        <div>
            <form className={css.loginForm} onSubmit={formik.handleSubmit}>
                <InputFormik mustFilled label={""} placeholder={"search"} getFieldProps={formik.getFieldProps("term")}
                             errors={formik.errors.term} type={"text"}/>

                <select {...formik.getFieldProps("friend")} name="friend">
                    <option value="null">All Users</option>
                    <option value="true">Followed</option>
                    <option value="false">No Followed</option>
                </select>

                    <div className={css.buttonBlock}>
                <AuthButton disabled={!!formik.errors.term} type="submit">Search</AuthButton>
            {/*{isFetching && <PreloaderSmall/>}*/}
                    </div>
        </form>
</div>


)
}