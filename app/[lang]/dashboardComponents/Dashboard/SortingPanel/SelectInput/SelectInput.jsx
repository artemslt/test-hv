import { useEffect, useState, useRef } from "react";
import { useLang } from "@/hooks/useLang";
import Constants from "../../../../constants/index";
import SelectArrow from "../../../../components/GeneralComponents/SelectInput/SelectArrowSVG/SelectArrow"
import styles from "./SelectInput.module.scss";

const SelectInput = ({ selectedOption, setSelectedOption, setSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { orderStatusUk, orderStatusEn } = Constants;
    const lang = useLang();
    const options = lang === "uk" ? orderStatusUk : orderStatusEn;
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
        setSearch('')
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            ref={selectRef}
            className={`${styles.select} ${
                isOpen ? `${styles.select_opened}` : ""
            }`}
            onClick={toggleList}
        > <button type="button" className={styles.button}>
            <SelectArrow isOpen={isOpen} />
            </button>
            {selectedOption.label}
            {isOpen && (
                <ul className={styles.options__wrapper}>
                    {options.map(option => (
                        <li
                            key={option.id}
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
