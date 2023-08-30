import React, { useEffect, useState } from "react";
import { onButtonCloseModal } from "@/helpers/onButtonCloseModal";
import { editContactFormSchema } from "@/schemas/editContactFormValidationSchema";
import Backdrop from "../../../components/GeneralComponents/Backdrop/Backdrop";
import Constants from "../../../constants/index";
import CrossButton from "@/app/[lang]/components/GeneralComponents/CrossButton/CrossButton";
import ContactForm from "@/app/[lang]/components/GeneralComponents/ContactForm/ContactForm";
import { useLang } from "@/hooks/useLang";
import styles from "./EditContactDataModal.module.scss";

const EditContactDataModal = ({
    showModal,
    setShowModal,
    dictionary,
    orderDate,
    order,
    setOrder,
}) => {
    const { contactOptionUk, contactOptionEn } = Constants;
    const [options, setOptions] = useState(contactOptionUk);
    const lang = useLang();

    useEffect(() => {
        if (lang === "en") {
            setOptions(contactOptionEn);
        }
    }, [lang, contactOptionEn]);

    const optionStatus = options.find(
        option => option.label === order?.connection_type
    );

    const initialValues = {
        name: order?.name || "",
        connection_type: optionStatus || "",
        phone: order?.phone.slice(1, order?.phone.length) || "",
        email: order?.email || "",
        comments: order?.comments || "",
        accepted_data_collection: order?.accepted_data_collection,
    };

    const modalSubmit = values => {
        onButtonCloseModal(setShowModal);
        setOrder(prev => ({ ...prev, ...values }));
    };

    return (
        <Backdrop showModal={showModal}>
            <div className={styles.modal}>
                <CrossButton
                    onClick={() => onButtonCloseModal(setShowModal)}
                    styles__button={styles.button_close}
                />
                <h3 className={`title--third ${styles.title}`}>
                    {dictionary?.orderPage.editContacts}
                </h3>

                <div className={styles.form__wrapper}>
                    <p className={styles.date}>
                        {dictionary?.orderPage.createdAt}
                        <span className={styles.date__value}>{orderDate}</span>
                    </p>
                    <ContactForm
                        dictionary={dictionary}
                        connectionType={order?.connection_type}
                        phone={order?.phone.slice(1, order?.phone.length)}
                        initialValues={initialValues}
                        validationSchema={editContactFormSchema}
                        onSubmit={modalSubmit}
                        buttonName={dictionary?.buttons.saveChanges}
                    />
                </div>
                <button
                    type="button"
                    className={`button__text`}
                    onClick={() => onButtonCloseModal(setShowModal)}
                >
                    {dictionary?.buttons.cancel}
                </button>
            </div>
        </Backdrop>
    );
};

export default EditContactDataModal;
