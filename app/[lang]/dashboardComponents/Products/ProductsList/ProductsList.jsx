import React from "react";
import ProductCard from "../../General/ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products, dictionary, deleteProduct, isDeleting }) => {
    return (
        <ul className={styles.list}>
            {products?.map(product => (
                <ProductCard
                    dictionary={dictionary}
                    key={product.id}
                    product={product}
                    title={product?.desc.title}
                    per_package={product?.desc.per_package}
                    weight={product?.desc.weight}
                    id={product?.id}
                    isEditShown={true}
                    isAvailable={product?.isAvailable}
                    deleteProduct={deleteProduct}
                    isDeleting={isDeleting}
                />
            ))}
        </ul>
    );
};

export default ProductsList;
