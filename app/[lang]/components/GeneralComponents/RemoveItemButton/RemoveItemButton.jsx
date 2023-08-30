import CrossIcon from "../Icons/CrossIcon";
import styles from "./RemoveItemButton.module.scss";

const RemoveItemButton = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            <CrossIcon stroke="currentColor" />
        </button>
    );
};

export default RemoveItemButton;
