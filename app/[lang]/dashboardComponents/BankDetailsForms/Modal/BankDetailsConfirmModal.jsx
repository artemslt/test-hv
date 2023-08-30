import { useEffect, useState } from "react";
import styles from "./BandDetailsConfirmModal.module.scss";
import "../../../../globals.scss";

const BankDetailsConfirmModal = ({
    dictionary,
    isLoading,
    handleSubmit,
    closeModal,
}) => {
    const [onSubmitClick, setOnSubmitClick] = useState(false);

    const handleFormSubmit = async () => {
        try {
            setOnSubmitClick(true);
            await handleSubmit();
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        if (!isLoading && onSubmitClick) {
            closeModal();
        }
    }, [isLoading]);

    return (
        <div className="modal">
            <p className={styles.title}>
                {dictionary?.bankDetailsPage.saveChanges}
            </p>

            <div className={styles.button__wrapper}>
                <button
                    className="button"
                    type="submit"
                    onClick={handleFormSubmit}
                    disabled={isLoading}
                >
                    {dictionary?.buttons.save}
                    {isLoading && <div className="spinner--white"></div>}
                </button>
            </div>

            <p className={styles.text} onClick={() => closeModal()}>
                {dictionary?.bankDetailsPage.cancel}
            </p>
        </div>
    );
};

export default BankDetailsConfirmModal;
