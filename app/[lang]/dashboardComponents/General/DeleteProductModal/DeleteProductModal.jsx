import React from "react";
import { onButtonCloseModal } from "../../../../../helpers/onButtonCloseModal";
import Backdrop from "../../../components/GeneralComponents/Backdrop/Backdrop";
import styles from "./DeleteProductModal.module.scss";

const DeleteProductModal = ({
    dictionary,
    showModal,
    setShowModal,
    deleteProduct,
    title,
    isDeleting = false,
}) => {
    return (
        <Backdrop showModal={showModal}>
            <div className="modal">
                <h3 className="title--third">{title}</h3>
                <div className={styles.button__wrapper}>
                    <button
                        className={`button`}
                        onClick={deleteProduct}
                        disabled={isDeleting}
                    >
                        {dictionary?.buttons.delete}
                        {isDeleting && <div className="spinner--white"></div>}
                    </button>
                </div>
                <button
                    type="button"
                    className={`text--secondary ${styles.button_cancel}`}
                    onClick={() => onButtonCloseModal(setShowModal)}
                >
                    {dictionary?.buttons.cancel}
                </button>
            </div>
        </Backdrop>
    );
};

export default DeleteProductModal;
