import React from "react";
import CartCard from "../CartCard/CartCard";
import styles from "./CartCardList.module.scss";

const CartCardList = ({ dictionary, cart }) => {
    return (
        <ul className={styles.list}>
            {cart?.map(cartItem => (
                <CartCard
                    key={cartItem.id}
                    cartItem={cartItem}
                    dictionary={dictionary}
                />
            ))}
        </ul>
    );
};

export default CartCardList;
