import { useState } from "react";
import { Formik, Field, Form } from "formik";
import Backdrop from "@/app/[lang]/components/GeneralComponents/Backdrop/Backdrop";
import BankDetailsConfirmModal from "../Modal/BankDetailsConfirmModal";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import { setAuthHeader, updateBankDetails } from "@/services/api";
import { useToken } from "@/hooks/useToken";
import styles from "./BankDetailsForm.module.scss";

const BankDetailsForm = ({
    bankDetails,
    description,
    validationSchema,
    isShowMask = false,
    mask = "",
    typeOfMask = "",
    inputStyles,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const token = useToken();
    const lang = useLang();
    const dictionary = useDictionary(lang);

    // show modal for each separate form
    const [localShowModal, setLocalShowModal] = useState(false);
    const openModal = () => {
        setLocalShowModal(true);
    };
    const closeModal = () => {
        setLocalShowModal(false);
    };

    const values = {
        isActive: bankDetails?.isActive,
        value: bankDetails?.value,
    };

    const handleFormSubmit = async values => {
        const updatedData = {
            name_en: bankDetails.name_en,
            name_uk: bankDetails.name_uk,
            title_en: bankDetails.title_en,
            title_uk: bankDetails.title_uk,
            value: values.value,
            isActive: values.isActive,
        };

        if (token) {
            setIsLoading(true);
            setAuthHeader(token);
            await updateBankDetails(updatedData, bankDetails._id);
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.form__wrapper}>
            <Formik
                initialValues={values}
                onSubmit={handleFormSubmit}
                validationSchema={() => validationSchema(dictionary)}
            >
                {({ errors, touched, isValid }) => (
                    <Form>
                        <label className={styles.label__wrapper}>
                            <Field
                                type="checkbox"
                                name="isActive"
                                className={`visually-hidden form__checkbox`}
                            />
                            <div className="checkbox"></div>
                            <p className={styles.checkbox_description}>
                                {lang === "uk"
                                    ? bankDetails?.title_uk
                                    : bankDetails?.title_en}
                            </p>
                        </label>
                        <label style={{ position: "relative", top: "0" }}>
                            <p className={styles.input__description}>
                                {description}
                            </p>

                            <Field
                                as={isShowMask ? typeOfMask : null}
                                mask={isShowMask ? `${mask}` : null}
                                maskchar=" "
                                className={` ${
                                    errors?.value &&
                                    touched?.value &&
                                    !isValid &&
                                    `input--error`
                                } ${inputStyles}`}
                                name="value"
                            />
                        </label>

                        <button
                            className={`button ${styles.button}`}
                            type="button"
                            onClick={openModal}
                            disabled={!isValid}
                        >
                            {dictionary?.buttons.save}
                        </button>

                        <Backdrop showModal={localShowModal}>
                            <BankDetailsConfirmModal
                                dictionary={dictionary}
                                handleSubmit={handleFormSubmit}
                                isLoading={isLoading}
                                closeModal={closeModal}
                            />
                        </Backdrop>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BankDetailsForm;
