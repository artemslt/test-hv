import { useEffect, useRef } from "react";

import styles from "../Backdrop/Backdrop.module.scss";

function Backdrop({
    children,
    showModal,
    closeModal = null,
    isOnEscClick = false,
    isBackdropClick = false,
}) {
    useEffect(() => {
        showModal
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [showModal]);

    //close modal on Escape click
    const backdropRef = useRef(null);

    useEffect(() => {
        if (showModal && backdropRef.current) {
            backdropRef.current.focus();
        }
    }, [showModal]);

    const handlerKeyDown = e => {
        if (e.code === "Escape" && isOnEscClick) {
            document.body.style.overflow = "";
            closeModal();
        }
    };

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target && isBackdropClick) {
            document.body.style.overflow = "";
            closeModal();
        }
    };

    return (
        <div
            className={`${styles.overlay}  ${showModal && styles.isOpen}`}
            onKeyDown={handlerKeyDown}
            tabIndex={1}
            ref={backdropRef}
            onClick={handleBackdropClick}
        >
            {showModal && <>{children}</>}
        </div>
    );
}
export default Backdrop;
