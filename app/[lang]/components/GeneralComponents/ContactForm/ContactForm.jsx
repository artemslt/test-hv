"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import { useLang } from "@/hooks/useLang";
import PhoneInputField from "../PhoneInput/PhoneInput";
import SelectInput from "../../GeneralComponents/SelectInput/SelectInput";
import Constants from "../../../constants/index";
import "react-phone-input-2/lib/style.css";
import styles from "./ContactForm.module.scss";

const ContactForm = ({
    dictionary,
    initialValues,
    phone = "",
    onSubmit,
    connectionType = "",
    validationSchema,
    buttonName,
    isChecboxShown = false,
}) => {
    const { contactOptionUk, contactOptionEn } = Constants;
    const [phoneInputValue, setPhoneInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState(contactOptionUk);
    const lang = useLang();

    useEffect(() => {
        setPhoneInputValue(phone);
    }, [phone]);

    useEffect(() => {
        if (lang === "en") {
            setOptions(contactOptionEn);
        }
    }, [lang, setSelectedOption, contactOptionEn]);

    useEffect(() => {
        const optionStatus = options.find(
            option => option.label === connectionType
        );
        setSelectedOption(optionStatus);
    }, [setSelectedOption, connectionType, options]);

    const handleSubmit = async values => {
        const updatedPhone = "+" + values.phone;

        const userContacts = {
            name: values.name,
            connection_type: values.connection_type.label,
            phone: updatedPhone,
            email: values.email,
            comments: values.comments,
            accepted_data_collection: values.accepted_data_collection,
        };
        onSubmit(userContacts);
    };

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={handleSubmit}
            validationSchema={() => validationSchema(dictionary)}
        >
            {({ errors, touched, isValid, dirty, setFieldValue }) => (
                <Form>
                    <div className={styles.inputs__wrapper}>
                        <label className={styles.label__wrapper}>
                            <p className="label">
                                {dictionary?.Checkout.yourName}
                            </p>
                            <Field
                                className={`input ${
                                    errors.name &&
                                    touched.name &&
                                    !isValid &&
                                    `input--error`
                                }`}
                                name="name"
                                placeholder={dictionary?.Checkout.name}
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="error__message"
                            />
                        </label>

                        <label className={styles.label__wrapper}>
                            <p className="label">
                                {dictionary?.Checkout.howToConnect}
                            </p>
                            <SelectInput
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                options={options}
                                setFieldValue={setFieldValue}
                                fieldName="connection_type"
                            />
                        </label>

                        <label className={styles.label__wrapper}>
                            <PhoneInputField
                                phoneInputValue={phoneInputValue}
                                setPhoneInputValue={setPhoneInputValue}
                                dictionary={dictionary}
                            />
                        </label>

                        <label className={styles.label__wrapper}>
                            <p className="label">
                                {dictionary?.Checkout.email}
                            </p>
                            <Field
                                className={`input ${
                                    errors.email &&
                                    touched.email &&
                                    !isValid &&
                                    `input--error`
                                }`}
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="error__message"
                            />
                        </label>

                        <label className={styles.label__wrapper}>
                            <p className="label">
                                {dictionary?.Checkout.yourComments}
                            </p>
                            <Field
                                as="textarea"
                                className="textarea"
                                name="comments"
                                placeholder={dictionary?.Checkout.comments}
                            />
                        </label>

                        {isChecboxShown ? (
                            <label className={styles.checkbox_label__wrapper}>
                                <Field
                                    type="checkbox"
                                    name="accepted_data_collection"
                                    className={`visually-hidden form__checkbox`}
                                />
                                <div className="checkbox"></div>
                                <div className={styles.accepted_data__wrapper}>
                                    <p className={styles.checkbox_description}>
                                        {
                                            dictionary?.Checkout
                                                .acceptedCollection
                                        }
                                        <a
                                            className={styles.checkbox_link}
                                            href="/"
                                            target="_blank"
                                        >
                                            {dictionary?.Checkout.personalData}
                                        </a>
                                    </p>
                                </div>
                            </label>
                        ) : (
                            ""
                        )}
                    </div>
                    <button
                        className="button"
                        type="submit"
                        disabled={!isValid || !dirty}
                    >
                        {buttonName}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
