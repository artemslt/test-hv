"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useDictionary } from "../../../../../hooks/useDictionary";
import { useParams } from "next/navigation";
import { useToken } from "@/hooks/useToken";
import {
    setAuthHeader,
    fetchOrderById,
    fetchProductsInStock,
    changeOrder,
} from "@/services/api";
import { showNotification } from "@/helpers/showNotification";
import handleConvertToPdf from "@/helpers/handleConvertToPdf";
import Constants from "@/app/[lang]/constants";
import Loader from "../../../components/GeneralComponents/Loader/Loader";
import OrderInfo from "../../../dashboardComponents/Order/OrderInfo/OrderInfo";
import BackButton from "../../../components/GeneralComponents/BackButton/BackButton";
import OrderProductsList from "../../../dashboardComponents/Order/OrderProductsList/OrderProductsList";
import AddProduct from "../../../dashboardComponents/Order/AddProduct/AddProduct";
import UpdateOrderStatus from "../../../dashboardComponents/Order/UpdateOrderStatus/UpdateOrderStatus";
import ErrorPage from "../../../components/GeneralComponents/ErrorPage/ErrorPage";
import styles from "./order.module.scss";

const OrderPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const token = useToken();
    const { chooseProductUk, chooseProductEn } = Constants;
    const { order: orderId } = useParams();
    const [options, setOptions] = useState(null);
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const [isSavingOrder, setIsSavingOrder] = useState(false);
    const [isOrderExists, setIsOrderExists] = useState(true);

    //Loading order by id
    const loadOrder = useCallback(async () => {
        try {
            setIsLoading(true);
            if (token) {
                setAuthHeader(token);
                const response = await fetchOrderById(orderId, lang);
                if (response.success) {
                    setOrder(response.data);
                } else {
                    setIsOrderExists(false);
                }
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    }, [orderId, lang, token]);

    //Loading product titles for select input
    const loadProductsTitles = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetchProductsInStock(lang);
            const productTitles = response.data.map(({ id, title }) => ({
                value: id,
                label: title,
            }));
            setOptions(
                lang === "en"
                    ? [chooseProductEn, ...productTitles]
                    : [chooseProductUk, ...productTitles]
            );
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    }, [lang, chooseProductEn, chooseProductUk]);

    useEffect(() => {
        loadProductsTitles();
    }, [loadProductsTitles]);

    useEffect(() => {
        loadOrder();
    }, [loadOrder]);

    const saveChanges = async () => {
        try {
            setIsSavingOrder(true);
            const orderItems = order?.orderItems.map(
                ({ quantity, product }) => ({ quantity, product: product._id })
            );
            const updatedOrder = {
                orderItems,
                name: order?.name,
                connection_type: order?.connection_type,
                phone: order?.phone,
                email: order?.email,
                comments: order?.comments,
                status: order?.status,
                accepted_data_collection: order?.accepted_data_collection,
            };
            const response = await changeOrder(order?._id, lang, updatedOrder);
            setIsSavingOrder(false);
            if (response.data.success) {
                showNotification(setIsNotificationShown);
            }
        } catch (error) {
            setIsSavingOrder(false);
            return error;
        }
    };

    const deleteProduct = id => {
        const newOrderList = order?.orderItems.filter(
            ({ product }) => product._id !== id
        );
        setOrder(prev => ({ ...prev, orderItems: newOrderList }));
    };

    const changeProductQuantity = (value, id) => {
        const newOrderList = order?.orderItems.map(item => {
            return item.product._id === id
                ? { ...item, quantity: value.quantity }
                : item;
        });
        setOrder(prev => ({ ...prev, orderItems: newOrderList }));
    };

    return (
        <>
            {!isOrderExists && !isLoading ? (
                <ErrorPage
                    dictionary={dictionary}
                    buttonName={dictionary?.orderPage.errorButton}
                    errorMessage={dictionary?.orderPage.errorMessage}
                    link={"dashboard"}
                />
            ) : (
                <section className={`container section`}>
                    {(!dictionary || isLoading) && <Loader />}

                    {isOrderExists && order && !isLoading && (
                        <>
                            <BackButton />
                            <div>
                                <h2 className="title--secondary">
                                    {dictionary?.orderPage.title}
                                    {order?.order_id}
                                </h2>
                                <div className={styles.wrapper}>
                                    <OrderInfo
                                        order={order}
                                        setOrder={setOrder}
                                        dictionary={dictionary}
                                    />
                                    <div className={styles.productsList}>
                                        <h3
                                            className={`title--third ${styles.productsList__title}`}
                                        >
                                            {dictionary?.orderPage.subtitle}
                                        </h3>
                                        <OrderProductsList
                                            dictionary={dictionary}
                                            order={order}
                                            deleteProduct={deleteProduct}
                                            changeProductQuantity={
                                                changeProductQuantity
                                            }
                                        />
                                    </div>
                                    <div className={styles.controlPanel}>
                                        <AddProduct
                                            dictionary={dictionary}
                                            options={options}
                                            order={order}
                                            setOrder={setOrder}
                                        />
                                        <UpdateOrderStatus
                                            dictionary={dictionary}
                                            status={order?.status}
                                            setOrder={setOrder}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.buttons__wrapper}>
                                <button
                                    type="button"
                                    className="button"
                                    onClick={saveChanges}
                                    disabled={isSavingOrder}
                                >
                                    {dictionary?.buttons.save}
                                    {isSavingOrder && (
                                        <div className="spinner--white"></div>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="button__text"
                                    onClick={() =>
                                        handleConvertToPdf(order, dictionary)
                                    }
                                >
                                    {dictionary?.orderPage.openPdf}
                                </button>
                            </div>
                        </>
                    )}
                </section>
            )}
            {isNotificationShown && (
                <div className={`notification`}>
                    {dictionary?.notifications.changesSaved}
                </div>
            )}
        </>
    );
};

export default OrderPage;
