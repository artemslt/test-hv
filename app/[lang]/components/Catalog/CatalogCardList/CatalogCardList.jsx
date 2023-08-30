import React from "react";
import ProductCard from "../../GeneralComponents/ProductCard/ProductCard";
import styles from "./CatalogCardList.module.scss";

const CatalogCardList = ({
    dictionary,
    products,
    setIsNotificationShown,
}) => {
    return (
        <ul className={styles.list}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    dictionary={dictionary}
                    setIsNotificationShown={setIsNotificationShown}
                />
            ))}
        </ul>
    );
};

export default CatalogCardList;
