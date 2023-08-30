import React from "react";
import Image from "next/image";
import { onButtonCloseModal } from "../../../../../helpers/onButtonCloseModal";
import Backdrop from "../../../components/GeneralComponents/Backdrop/Backdrop";
import styles from "./WrongEmailModal.module.scss";

const WrongEmailModal = ({ dictionary, showModal, setShowModal }) => {
    return (
        <Backdrop showModal={showModal}>
            <div className="modal">
                <h3 className={`${styles.title} title--third`}>
                    {dictionary?.forgotPassword.noUser}
                </h3>
                <p className={`${styles.text} text`}>
                    {dictionary?.forgotPassword.enterRightEmail}
                </p>
                <div className={styles.wrapper}>
                    <button
                        className="button"
                        onClick={() => onButtonCloseModal(setShowModal)}
                    >
                        {dictionary?.buttons.ok}
                    </button>
                </div>
            </div>
        </Backdrop>
    );
};

export default WrongEmailModal;
