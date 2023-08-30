import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { resetPassword } from "@/services/api";
import { passwordSchema } from "../../../../../schemas/resetPasswordValidationSchema";
import ShowPasswordIconButton from "../../General/ShowPasswordIconButton/ShowPasswordIconButton";
import styles from "./ResetPasswordForm.module.scss";

const ResetPasswordForm = ({ dictionary, setShowModal }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useParams();
    const initialValues = { password: "" };

    const handleSubmit = async values => {
        try {
            setIsLoading(true);
            const credentials = {
                password: values.password.trim(),
                resetToken: token,
            };
            await resetPassword(credentials);
            setShowModal(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={() => passwordSchema(dictionary)}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, dirty, isValid }) => (
                <Form className={styles.form}>
                    <label
                        htmlFor="password"
                        className={`label ${styles.label}`}
                    >
                        {dictionary?.resetPassword.enterPassword}
                        <ShowPasswordIconButton
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                    </label>
                    <Field
                        className={`input ${styles.input} ${
                            errors?.password &&
                            touched?.password &&
                            "input--error"
                        }`}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                    ></Field>
                    <ErrorMessage
                        className="error__message"
                        name="password"
                        component="p"
                    ></ErrorMessage>
                    <button
                        type="submit"
                        className={`button ${styles.button}`}
                        disabled={!(dirty && isValid) || isLoading}
                    >
                        {dictionary?.buttons.save}
                        {isLoading && <div className="spinner--white"></div>}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ResetPasswordForm;
