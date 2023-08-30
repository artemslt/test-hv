import styles from "./ButtonCallBack.module.scss";
const ButtonCallBack = ({ dictionary, setShowFormCallBack }) => {
    return (
        <button
            className={styles.btn}
            onClick={() => setShowFormCallBack(true)}
        >
            {dictionary?.mobileMenu.callBack}
        </button>
    );
};

export default ButtonCallBack;
