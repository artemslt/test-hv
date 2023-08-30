import { useEffect, useState, useRef } from "react";
import styles from "./SelectInput.module.scss";
import SelectArrow from "./SelectArrowSVG/SelectArrow";
import "../../../../globals.scss";

const SelectInput = ({
    selectedOption,
    setSelectedOption,
    options,
    setFieldValue,
    fieldName,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = event => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOptionSelect = option => {
        if (fieldName) {
            setFieldValue(fieldName, option);
        }
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            ref={selectRef}
            className={`${styles.select_input} ${
                isOpen ? `${styles.select_opened}` : ""
            }`}
            onClick={toggleList}
        >
            <p className={styles.select__input__text}>
                {selectedOption?.label}
            </p>
            <div className={styles.button}>
                <SelectArrow isOpen={isOpen} />
            </div>
            {isOpen && (
                <ul className={styles.options__wrapper}>
                    {options.map(option => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionSelect(option)}
                            className={styles.option}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectInput;
