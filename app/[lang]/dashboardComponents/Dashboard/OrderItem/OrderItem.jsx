import React from "react";
import { useLang } from "@/hooks/useLang";
import Constants from "@/app/[lang]/constants";
import styles from "./OrderItem.module.scss";
import Link from "next/link";

const OrderItem = ({ order }) => {
    const lang = useLang();
    const { orderStatusUk, orderStatusEn, number } = Constants;
    let color = null;
    switch (order.status) {
        case orderStatusUk[1].label:
        case orderStatusEn[1].label:
            color = styles.status_blue;
            break;
        case orderStatusUk[2].label:
        case orderStatusEn[2].label:
            color = styles.status_orange;
            break;
        case orderStatusUk[3].label:
        case orderStatusEn[3].label:
            color = styles.status_green;
            break;
        case orderStatusUk[4].label:
        case orderStatusEn[4].label:
            color = styles.status_red;
            break;
    }
    const orderDate = new Date(order.createdAt).toLocaleDateString("uk-UA");
    return (
     <li className={styles.item}>
            <span className="text--secondary">{orderDate}</span>
            <Link href={`/${lang}/dashboard/order/${order._id}`}>
                <span className="text">
                    {number}
                    {order.order_id}
                </span>
            </Link>

            <span className={`text--secondary ${styles.status} ${color}`}>
                {order.status}
            </span>
        </li>
    );
};

export default OrderItem;
