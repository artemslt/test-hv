import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { emailSchema } from "@/schemas/sendEmailValidationSchema";
import { useLang } from "@/hooks/useLang";
import { requestResetPassword } from "@/services/api";
import styles from "./SendEmailForm.module.scss";

const SendEmailForm = ({ dictionary, setShowModal }) => {
    const [isLoading, setIsLoading] = useState(false);
    const lang = useLang();
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const initialValues = { email: "" };

    const handleSubmit = async values => {
        try {
            setIsLoading(true);
            const email = { email: values.email.trim() };
            const response = await requestResetPassword(email, lang);
            if (response.success) {
                params.set("email", values.email.trim());
                router.push(`/${lang}/auth/sentemail?${params}`);
            } else setShowModal(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={() => emailSchema(dictionary)}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, dirty, isValid }) => (
                <Form className={styles.form}>
                    <label htmlFor="email" className="label">
                        {dictionary?.forgotPassword.enterEmail}
                    </label>
                    <Field
                        className={`input ${
                            errors?.email && touched?.email && "input--error"
                        }`}
                        name="email"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage
                        className="error__message"
                        name="email"
                        component="p"
                    ></ErrorMessage>
                    <button
                        type="submit"
                        className={`button ${styles.button}`}
                        disabled={!(dirty && isValid) || isLoading}
                    >
                        {dictionary?.buttons.send}
                        {isLoading && <div className="spinner--white"></div>}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SendEmailForm;
