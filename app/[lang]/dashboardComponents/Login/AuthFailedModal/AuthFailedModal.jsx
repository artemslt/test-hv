import React from "react";
import { onButtonCloseModal } from "../../../../../helpers/onButtonCloseModal";
import Backdrop from "../../../components/GeneralComponents/Backdrop/Backdrop";
import styles from "./AuthFailedModal.module.scss";

const AuthFailedModal = ({ dictionary, showModal, setShowModal }) => {
    return (
        <Backdrop showModal={showModal}>
            <div className="modal">
                <h3 className='title--third'>
                    {dictionary?.authorization.authFailedModal}
                </h3>
                <div className={styles.wrapper}>
                    <button
                        className={`${styles.button} button`}
                        onClick={() => onButtonCloseModal(setShowModal)}
                    >
                        {dictionary?.buttons.ok}
                    </button>
                </div>
            </div>
        </Backdrop>
    );
};

export default AuthFailedModal;
