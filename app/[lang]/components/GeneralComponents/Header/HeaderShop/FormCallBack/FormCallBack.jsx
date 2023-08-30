import { useState } from "react";
import InputMask from "react-input-mask";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactCallBackSchema } from "../../../../../../../schemas/contactCallBackValidationSchema";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import CrossButton from "../../../CrossButton/CrossButton";
import { showNotification } from "../../../../../../../helpers/showNotification";
import { sendCallBackToTelegram } from "@/services/api";
import Constants from "../../../../../constants/index";
import styles from "../FormCallBack/FormCallBack.module.scss";

const FormCallBack = ({
    dictionary,
    setShowFormCallBack,
    isNotificationShown,
    setIsNotificationShown,
    showForm,
}) => {
    // const [isNotificationShown, setIsNotificationShown] = useState(false);
    const customer = { name: "", phone: "" };

    const handleSubmit = (customer, { resetForm }) => {
        const updatedCustomer = {
            name: customer.name,
            phone: customer.phone,
        };

        sendCallBackToTelegram(updatedCustomer);
        showNotification(setIsNotificationShown);
        setTimeout(() => {
            setShowFormCallBack(false);
        }, Constants.setTimeout);
        resetForm();
    };

    return (
        <>
            <div
                className={`${styles.modalForm}  ${showForm && styles.isShow} ${
                    !showForm && styles.isClose
                }`}
            >
                <div className={styles.modalForm__container}>
                    <CrossButton
                        onClick={() => setShowFormCallBack(false)}
                        styles__button={styles.close}
                    />
                    <div className={styles.switcher}>
                        <LocaleSwitcher />
                    </div>
                </div>

                <div className={styles.content}>
                    <h3 className={`${styles.title} title--third `}>
                        {dictionary.formCallBack.title}
                    </h3>
                    <p className={`${styles.text} text--form `}>
                        {dictionary.formCallBack.text}
                    </p>
                    <Formik
                        initialValues={customer}
                        onSubmit={handleSubmit}
                        validationSchema={() =>
                            contactCallBackSchema(dictionary)
                        }
                    >
                        {({ errors, touched, dirty, isValid }) => (
                            <Form className={styles.form}>
                                <label htmlFor="name" className="label">
                                    {dictionary.formCallBack.contactPerson}
                                </label>
                                <Field
                                    className={`${styles.input} input ${
                                        errors?.name &&
                                        touched?.name &&
                                        !isValid &&
                                        "input--error"
                                    }`}
                                    name="name"
                                    type="text"
                                    placeholder={dictionary.formCallBack.name}
                                    autoComplete="off"
                                ></Field>
                                <ErrorMessage
                                    className={` ${styles.error}`}
                                    name="name"
                                    component="p"
                                ></ErrorMessage>
                                <label
                                    htmlFor="phone"
                                    className={`label ${styles.label}`}
                                >
                                    {dictionary.formCallBack.phoneNumber}
                                </label>
                                <Field
                                    as={InputMask}
                                    mask={`+38(999) 999-99-99`}
                                    className={`${styles.input} input  ${
                                        errors?.phone &&
                                        touched?.phone &&
                                        !isValid &&
                                        "input--error"
                                    }`}
                                    placeholder="+38(0__) "
                                    name="phone"
                                    type="tel"
                                    autoComplete="on"
                                ></Field>
                                <ErrorMessage
                                    className={` ${styles.error}`}
                                    name="phone"
                                    component="p"
                                ></ErrorMessage>
                                <button
                                    type="submit"
                                    className={`button ${styles.btn}`}
                                    disabled={!(dirty && isValid)}
                                >
                                    {dictionary.buttons.send}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};
export default FormCallBack;
