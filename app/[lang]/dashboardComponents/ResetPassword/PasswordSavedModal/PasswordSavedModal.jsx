import React from "react";
import { useRouter } from "next/navigation";
import Backdrop from "@/app/[lang]/components/GeneralComponents/Backdrop/Backdrop";
import styles from "./PasswordSavedModal.module.scss";
import { useLang } from "@/hooks/useLang";

const PasswordSavedModal = ({ dictionary, showModal }) => {
    const lang = useLang();
    const router = useRouter();

    const onModalClick = () => {
        router.push(`/${lang}/auth/login`);
    };
    return (
        <Backdrop showModal={showModal}>
            <div className="modal">
                <h3 className="title--third">
                    {dictionary?.resetPassword.passwordSaved}
                </h3>
                <div className={styles.wrapper}>
                    <button
                        className={`${styles.button} button`}
                        onClick={onModalClick}
                    >
                        {dictionary?.buttons.ok}
                    </button>
                </div>
            </div>
        </Backdrop>
    );
};

export default PasswordSavedModal;
