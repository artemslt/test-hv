import React, { useState, useEffect } from "react";
import { useLang } from "@/hooks/useLang";
import { fetchOneProductById } from "@/services/api";
import Constants from "@/app/[lang]/constants";
import SelectInput from "@/app/[lang]/components/GeneralComponents/SelectInput/SelectInput";
import styles from "./AddProduct.module.scss";

const AddProduct = ({ order, setOrder, dictionary, options }) => {
    const lang = useLang();
    const { chooseProductUk, chooseProductEn } = Constants;
    const [selectedOption, setSelectedOption] = useState(chooseProductUk);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (lang === "en") {
            setSelectedOption(chooseProductEn);
        }
    }, [lang, setSelectedOption, chooseProductEn]);

    const addNewProduct = async selectedOption => {
        try {
            const id = selectedOption.value;
            const isProductInList = order?.orderItems.find(
                item => item.product._id === id
            );
            let newProductsList = null;
            if (isProductInList) {
                newProductsList = order?.orderItems.map(item => {
                    return item.product._id === id
                        ? { ...item, ...{ quantity: item.quantity + 1 } }
                        : item;
                });
            } else {
                setIsLoading(true);
                const response = await fetchOneProductById(lang, id);
                const { weight, title, per_package } = response.data.desc;
                const newOrderedProduct = {
                    quantity: 1,
                    product: { _id: id, desc: { weight, title, per_package } },
                };
                newProductsList = [...order?.orderItems, newOrderedProduct];
                setIsLoading(false);
            }
            setOrder(prev => ({ ...prev, orderItems: newProductsList }));
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    return (
        <div className={styles.addPanel}>
            <p className={styles.text}>{dictionary?.orderPage.addProduct}</p>
            <div className={styles.wrapper}>
                <SelectInput
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    options={options}
                />
                <button
                    className={styles.button}
                    onClick={() => addNewProduct(selectedOption)}
                    disabled={
                        selectedOption === chooseProductUk ||
                        selectedOption === chooseProductEn ||
                        isLoading
                    }
                >
                    {dictionary?.orderPage.add}
                    {isLoading && <div className="spinner--white"></div>}
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
