import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLang } from "../../../../../hooks/useLang";
import { authSchema } from "../../../../../schemas/authValidationSchema";
import ShowPasswordIconButton from "../../General/ShowPasswordIconButton/ShowPasswordIconButton";
import styles from "./AuthForm.module.scss";

const AuthForm = ({ dictionary, setShowModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const lang = useLang();
    const router = useRouter();
    const initialValues = { login: "", password: "" };

    const handleSubmit = async values => {
        try {
            setIsLoading(true);
            const result = await signIn("credentials", {
                email: values.login.trim(),
                password: values.password.trim(),
                redirect: false,
            });
            result.ok ? router.push(`/${lang}/dashboard`) : setShowModal(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={() => authSchema(dictionary)}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, dirty, isValid }) => (
                <Form className={styles.form}>
                    <label htmlFor="login" className="label">
                        {dictionary?.authorization.login}
                    </label>
                    <Field
                        className={`input ${
                            errors?.login && touched?.login && "input--error"
                        }`}
                        name="login"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage
                        className="error__message"
                        name="login"
                        component="p"
                    ></ErrorMessage>
                    <label
                        htmlFor="password"
                        className={`label ${styles.label}`}
                    >
                        {dictionary?.authorization.password}
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
                        {dictionary?.buttons.login}
                        {isLoading && <div className="spinner--white"></div>}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AuthForm;
