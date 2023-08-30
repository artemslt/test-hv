import styles from "./CardIcon.module.scss";

const CardIcon = () => {
    return (
        <svg
            className={`${styles.image}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <path d="M19.1838 4.91249L12.0001 4.75L4.81639 4.91249C3.48523 4.9426 2.35813 5.90322 2.11744 7.21278C1.53572 10.3779 1.53572 13.6225 2.11744 16.7876C2.35813 18.0972 3.48523 19.0578 4.81639 19.0879L12.0001 19.2504L19.1838 19.0879C20.515 19.0578 21.6421 18.0972 21.8828 16.7876C22.4645 13.6225 22.4645 10.3779 21.8828 7.21278C21.6421 5.90322 20.515 4.9426 19.1838 4.91249ZM4.85031 6.41211L12.0001 6.25038L19.1499 6.41211C19.7702 6.42613 20.2953 6.87374 20.4075 7.48393C20.5608 8.31792 20.6712 9.15776 20.7389 10.0002H3.26133C3.32899 9.15776 3.43945 8.31792 3.59273 7.48393C3.70488 6.87374 4.23006 6.42613 4.85031 6.41211ZM3.18115 12.0002C3.18115 13.5119 3.31835 15.0235 3.59273 16.5165C3.70488 17.1266 4.23006 17.5742 4.85031 17.5883L12.0001 17.75L19.1499 17.5883C19.7702 17.5742 20.2953 17.1266 20.4075 16.5165C20.6819 15.0235 20.8191 13.5119 20.8191 12.0002H3.18115Z" />
        </svg>
    );
};

export default CardIcon;