const MinusIcon = ({ stroke = "" }) => {
    return (
        <svg
            aria-label="minus"
            width="100%"
            height="100%"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.6668 20L28.3335 20"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default MinusIcon;
