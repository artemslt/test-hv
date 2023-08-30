import React from "react";
import SelectInput from "./SelectInput/SelectInput";
import styles from "./SortingPanel.module.scss";

const SortingPanel = ({
    dictionary,
    selectedOption,
    setSelectedOption,
    setSearch,
}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>{dictionary?.dashboard.sort}</span>
            <SelectInput
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setSearch={setSearch}
            />
        </div>
    );
};

export default SortingPanel;
