import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SearchIcon from "./SearchIcon/SearchIcon";
import CrossIcon from "@/app/[lang]/components/GeneralComponents/Icons/CrossIcon";
import styles from "./SearchForm.module.scss";

const SearchForm = ({
    dictionary,
    isLoading,
    search,
    setSearch,
    placeholder,
    validationSchema,
}) => {
    const initialValues = { search: search };

    const handleSubmit = (values, { setFieldValue, resetForm }) => {
        setSearch(prev => (!prev ? values.search.trim() : ""));
        !search ? setFieldValue("search", values.search.trim()) : resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={() => validationSchema(dictionary)}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isValid, values, setFieldValue }) => (
                <Form className={`${styles.form}`}>
                    <label className={`label ${styles.label}`}>
                        <Field
                            className={`input ${styles.input} ${
                                errors?.search &&
                                touched?.search &&
                                "input--error"
                            }`}
                            name="search"
                            type="text"
                            autoComplete="on"
                            placeholder={placeholder}
                            onChange={e => {
                                setFieldValue("search", e.currentTarget.value);
                                !e.currentTarget.value && setSearch("");
                            }}
                        ></Field>
                        <ErrorMessage
                            className="error__message"
                            name="search"
                            component="p"
                        ></ErrorMessage>
                    </label>
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={!(values.search && isValid) || isLoading}
                    >
                        {search ? (
                            <CrossIcon stroke="currentColor" />
                        ) : (
                            <SearchIcon fill="currentColor" />
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SearchForm;
