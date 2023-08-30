import React, { useState } from "react";
import EditIcon from "../../General/EditIcon/EditIcon";
import EditContactDataModal from "../EditContactDataModal/EditContactDataModal";
import styles from "./OrderInfo.module.scss";

const OrderInfo = ({ order, setOrder, dictionary }) => {
    const orderDate =
        order && new Date(order?.createdAt).toLocaleDateString("uk-UA");
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <p className={styles.info}>
                        {dictionary?.orderPage.createdAt}
                        <span className={styles.info__value}>{orderDate}</span>
                    </p>
                    <p className={styles.info}>
                        {dictionary?.orderPage.contactPerson}
                        <span className={styles.info__value}>
                            {order?.name}
                        </span>
                    </p>
                    <p className={styles.info}>
                        {dictionary?.orderPage.howToConnect}
                        <span className={styles.info__value}>
                            {order?.connection_type}
                        </span>
                    </p>
                    <p className={styles.info}>
                        {dictionary?.orderPage.phone}
                        <span className={styles.info__value}>
                            {order?.phone}
                        </span>
                    </p>
                    <p className={styles.info}>
                        {dictionary?.orderPage.email}
                        <span className={styles.info__value}>
                            {order?.email}
                        </span>
                    </p>

                    <div className={styles.comment__wrapper}>
                        <p className={styles.info}>
                            {dictionary?.orderPage.comment}
                        </p>
                        <span className={styles.info__value}>
                            {order?.comments}
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => setShowModal(true)}
                >
                    <EditIcon fill="currentColor" />
                </button>
            </div>
            <EditContactDataModal
                dictionary={dictionary}
                showModal={showModal}
                setShowModal={setShowModal}
                orderDate={orderDate}
                order={order}
                setOrder={setOrder}
            />
        </>
    );
};

export default OrderInfo;
