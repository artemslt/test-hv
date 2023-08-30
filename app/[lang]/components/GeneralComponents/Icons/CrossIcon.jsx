const CrossIcon = ({ stroke = "", styles__icon = "" }) => {
    return (
        <svg
            aria-label="cross icon"
            className={styles__icon}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30 30L20 20M20 20L10 10M20 20L30 10M20 20L10 30"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CrossIcon;
