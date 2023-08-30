import React, { useState, useEffect } from "react";
import { useLang } from "@/hooks/useLang";
import Constants from "@/app/[lang]/constants";
import SelectInput from "@/app/[lang]/components/GeneralComponents/SelectInput/SelectInput";
import styles from "./UpdateOrderStatus.module.scss";

const UpdateOrderStatus = ({ dictionary, status, setOrder }) => {
    const lang = useLang();
    const { statusUk, statusEn } = Constants;
    const [selectedOption, setSelectedOption] = useState(null);
    const options = lang === "uk" ? statusUk : statusEn;

    useEffect(() => {
        const optionStatus = options.find(option => option.label === status);
        setSelectedOption(optionStatus);
    }, [setSelectedOption, status, options]);

    const setNewStatus = option => {
        setSelectedOption(option);
        setOrder(prev => ({ ...prev, status: option.label }));
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{dictionary?.orderPage.status}</p>
            <SelectInput
                selectedOption={selectedOption}
                setSelectedOption={setNewStatus}
                options={options}
            />
        </div>
    );
};

export default UpdateOrderStatus;
