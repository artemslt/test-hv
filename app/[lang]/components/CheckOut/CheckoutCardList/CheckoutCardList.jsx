import React from "react";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
import Loader from "../../GeneralComponents/Loader/Loader";
import styles from "./CheckoutCardList.module.scss";

const CheckoutCardList = ({ dictionary, cartProducts, isLoading }) => {
    return (
        <>
            {!isLoading ? (
                <ul className={styles.list}>
                    {cartProducts?.map(cartItem => (
                        <CheckoutCard
                            key={cartItem.id}
                            cartItem={cartItem}
                            dictionary={dictionary}
                        />
                    ))}
                </ul>
            ) : (
                <Loader dictionary={dictionary} />
            )}
        </>
    );
};

export default CheckoutCardList;
