import React from "react";
import { redirectToSection } from "@/helpers/redirectToSection";
import styles from "./NavigationButton.module.scss";

const NavigationButton = ({ children, id }) => {
    return (
        <button className={styles.button} onClick={() => redirectToSection(id)}>
            {children}
        </button>
    );
};

export default NavigationButton;
