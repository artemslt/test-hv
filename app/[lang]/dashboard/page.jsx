"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useToken } from "@/hooks/useToken";
import { useDictionary } from "@/hooks/useDictionary";
import { fetchOrders, setAuthHeader, fetchOrderByNumber } from "@/services/api";
import Constants from "../constants";
import { searchOrderSchema } from "@/schemas/searchOrderValidationSchema";
import OrdersList from "../dashboardComponents/Dashboard/OrdersList/OrdersList";
import SortingPanel from "../dashboardComponents/Dashboard/SortingPanel/SortingPanel";
import ShowMoreButton from "../dashboardComponents/Dashboard/ShowMoreButton/ShowMoreButton";
import Loader from "../components/GeneralComponents/Loader/Loader";
import SearchForm from "../dashboardComponents/General/SearchForm/SearchForm";
import NoProducts from "../components/GeneralComponents/NoProducts/NoProducts";
import ScrollToTopButton from "../components/GeneralComponents/ScrollToTopButton/ScrollToTopButton";
import styles from "./dashboard.module.scss";

const DashboardPage = ({ params: { lang } }) => {
    const { orderStatusUk, orderStatusEn } = Constants;
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState(null);
    const [isOrderAbsent, setIsOrderAbsent] = useState(null);
    const [pagesQuantity, setPagesQuantity] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState(orderStatusUk[0]);
    const [search, setSearch] = useState("");
    const dictionary = useDictionary(lang);
    const token = useToken();

    // loading orders during first render
    const loadOrders = useCallback(async () => {
        try {
            setIsLoading(true);
            setOrders(null);
            setIsOrderAbsent(null);
            if (token) {
                setAuthHeader(token);
                const response = await fetchOrders(
                    lang,
                    1,
                    selectedOption.value
                );
                setOrders(response.data);
                setPagesQuantity(Math.ceil(response.quantity / 10));
                setCurrentPage(1);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    }, [lang, token, selectedOption]);

    // loading an order as a result of a user search by order number
    const loadOrderByNumber = useCallback(async () => {
        try {
            setIsLoading(true);
            setOrders(null);
            setPagesQuantity(1);
            const response = await fetchOrderByNumber(search, lang);
            response.data.success
                ? setOrders([response.data.data])
                : setIsOrderAbsent(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    }, [lang, search]);

    useEffect(() => {
        if (lang === "en") {
            setSelectedOption(orderStatusEn[0]);
        }
    }, [lang, setSelectedOption, orderStatusEn]);

    useEffect(() => {
        if (!search) {
            loadOrders();
        }
    }, [loadOrders, search]);

    useEffect(() => {
        if (search) {
            loadOrderByNumber();
        }
    }, [loadOrderByNumber, search]);

    //loading orders after clicking the show more button
    const showMore = async option => {
        try {
            setIsLoading(true);
            const response = await fetchOrders(
                lang,
                currentPage + 1,
                option.value
            );
            setOrders(prev => [...prev, ...response.data]);
            setCurrentPage(prev => prev + 1);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    return (
        <section className="container section">
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <h2 className="title--secondary">
                        {dictionary?.dashboard.title}
                    </h2>
                    <div className={styles.filters__wrapper}>
                        <SearchForm
                            dictionary={dictionary}
                            isLoading={isLoading}
                            search={search}
                            setSearch={setSearch}
                            placeholder={dictionary?.dashboard.search}
                            validationSchema={searchOrderSchema}
                        />
                        <SortingPanel
                            dictionary={dictionary}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            setSearch={setSearch}
                        />
                    </div>
                    {orders && <OrdersList orders={orders} />}
                    {currentPage < pagesQuantity && !isLoading && orders && (
                        <ShowMoreButton
                            dictionary={dictionary}
                            showMore={() => showMore(selectedOption)}
                        />
                    )}
                    {isLoading && <Loader />}
                    {!isOrderAbsent && !isLoading && !orders && (
                        <NoProducts
                            position={styles.noproducts}
                            showButton={false}
                        >
                            {dictionary?.dashboard.noOrders}
                        </NoProducts>
                    )}
                    {isOrderAbsent && !isLoading && !orders && (
                        <NoProducts
                            position={styles.noproducts}
                            showButton={false}
                        >
                            {dictionary?.dashboard.noOrder}
                        </NoProducts>
                    )}
                    <ScrollToTopButton dictionary={dictionary} />
                </>
            )}
        </section>
    );
};

export default DashboardPage;
