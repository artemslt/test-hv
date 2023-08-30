import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import styles from "./OrdersList.module.scss";

const OrdersList = ({ orders }) => {
    return (
        <ul className={styles.list}>
            {orders?.map(order => (
                <OrderItem key={order._id} order={order} />
            ))}
        </ul>
    );
};

export default OrdersList;
