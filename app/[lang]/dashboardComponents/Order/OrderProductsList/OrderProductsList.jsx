import React from "react";
import ProductCard from "../../General/ProductCard/ProductCard";
import styles from "./OrderProductsList.module.scss";

const OrderProductsList = ({ order, dictionary, deleteProduct, changeProductQuantity }) => {
    return (
        <ul className={styles.list}>
            {order?.orderItems?.map(product => (
                <ProductCard
                    key={product?.product._id}
                    product={product}
                    dictionary={dictionary}
                    title={product?.product.desc.title}
                    per_package={product?.product.desc.per_package}
                    weight={product?.product.desc.weight}
                    id={product?.product._id}
                    isCounterShown={true}
                    deleteProduct={deleteProduct}
                    changeProduct={changeProductQuantity}
                />
            ))}
        </ul>
    );
};

export default OrderProductsList;
