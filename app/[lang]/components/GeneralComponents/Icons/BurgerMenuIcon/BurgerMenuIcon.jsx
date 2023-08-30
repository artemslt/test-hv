import styles from "./BurgerMenuIcon.module.scss";

const BurgerMenuIcon = () => {
    return (
        <svg
            aria-label="menu icon"
            className={`${styles.icon}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <path d="M23.0418 14C23.0418 13.5167 22.6501 13.125 22.1668 13.125H5.8335C5.35025 13.125 4.9585 13.5167 4.9585 14C4.9585 14.4832 5.35025 14.875 5.8335 14.875H22.1668C22.6501 14.875 23.0418 14.4832 23.0418 14Z" />
            <path d="M23.0418 8.16663C23.0418 7.68338 22.6501 7.29163 22.1668 7.29163H5.8335C5.35025 7.29163 4.9585 7.68338 4.9585 8.16663C4.9585 8.64988 5.35025 9.04163 5.8335 9.04163H22.1668C22.6501 9.04163 23.0418 8.64988 23.0418 8.16663Z" />
            <path d="M23.0418 19.8333C23.0418 19.35 22.6501 18.9583 22.1668 18.9583H5.8335C5.35025 18.9583 4.9585 19.35 4.9585 19.8333C4.9585 20.3165 5.35025 20.7083 5.8335 20.7083H22.1668C22.6501 20.7083 23.0418 20.3165 23.0418 19.8333Z" />
        </svg>
    );
};

export default BurgerMenuIcon;
