export default function SliderArrow(props) {
    const { className, style, onClick, styles_arrow } = props;

    return (
        <div
            className={`${className}, ${styles_arrow}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
