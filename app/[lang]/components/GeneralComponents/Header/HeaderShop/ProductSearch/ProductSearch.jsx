import { useState } from "react";
import ProductsList from "./ProductsList/ProductsList";
import InputSearch from "./InputSearch/InputSearch";
import { isEmpty } from "../../../../../../../helpers/isEmpty";
import { useLang } from "../../../../../../../hooks/useLang";
import styles from "../ProductSearch/ProductSearch.module.scss";

const ProductSearch = ({ dictionary, setShowSearch, isShow }) => {
    const activeLocale = useLang();
    const [filter, setFilter] = useState("");
    const empty = isEmpty(filter);

    const clearInput = () => {
        setFilter("");
    };

    return (
        <div>
            <div
                className={`${styles.window__popup} ${
                    isShow && styles.isShow
                } ${!isShow && styles.isClose}`}
            >
                <div className={styles.input}>
                    <InputSearch
                        filter={filter}
                        setFilter={setFilter}
                        clearInput={clearInput}
                        dictionary={dictionary}
                        setShowSearch={setShowSearch}
                    />
                </div>

                {!empty && (
                    <ProductsList
                        search={filter}
                        dictionary={dictionary}
                        lang={activeLocale}
                        setShowSearch={setShowSearch}
                        clearInput={clearInput}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductSearch;
