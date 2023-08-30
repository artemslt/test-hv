import React, { useEffect, useState } from "react";
import ArrowTopIcon from "../Icons/ArrowTopIcon";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isShownOnFooter, setIsShownOnFooter] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            const footer = document.querySelector("footer");
            if (scrolled > 300) {
                setIsVisible(true);
            } else if (scrolled <= 300) {
                setIsVisible(false);
            }

            if (footer.getBoundingClientRect().top <= window.innerHeight) {
                setIsShownOnFooter(true);
            } else {
                setIsShownOnFooter(false);
            }
        };
        window.addEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className={`${styles.button} ${
                        isShownOnFooter && styles.button_accent
                    }`}
                    onClick={scrollToTop}
                >
                    <ArrowTopIcon />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
