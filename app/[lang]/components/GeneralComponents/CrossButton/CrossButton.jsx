import CrossIcon from "../Icons/CrossIcon";
import styles from "./CrossButton.module.scss";

const CrossButton = ({ onClick, styles__button = "" }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.button} ${styles__button}`}
        >
            <CrossIcon stroke="currentColor" />
        </button>
    );
};

export default CrossButton;
