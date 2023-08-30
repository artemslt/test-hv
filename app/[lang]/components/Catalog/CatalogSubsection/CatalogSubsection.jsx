import React, { useState, useEffect, useCallback } from "react";
import { useLang } from "@/hooks/useLang";
import { useProductsQuantity } from "@/hooks/useProductsQuantity";
import { fetchProductsByCategory } from "@/services/api";
import CatalogCardList from "../CatalogCardList/CatalogCardList";
import Loader from "../../GeneralComponents/Loader/Loader";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import NoProducts from "../../GeneralComponents/NoProducts/NoProducts";
import styles from "./CatalogSubsection.module.scss";

export default function CatalogSubsection({
    id,
    title,
    dictionary,
    products,
    setProducts,
    setIsNotificationShown,
}) {
    const [showAll, setShowAll] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pagesQuantity, setPagesQuantity] = useState(null);
    const lang = useLang();
    const productsQuantity = useProductsQuantity();

    const loadProducts = useCallback(
        async (limit = "") => {
            setIsLoading(true);
            try {
                const response =
                    title &&
                    (await fetchProductsByCategory(title, lang, limit));
                setProducts(response.data);
                setPagesQuantity(
                    Math.ceil(response.quantity / productsQuantity)
                );
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                return error;
            }
        },
        [lang, setProducts, title, productsQuantity]
    );

    useEffect(() => {
        loadProducts(productsQuantity);
    }, [loadProducts, productsQuantity]);

    const showProducts = (limit = "") => {
        setShowAll(prev => !prev);
        loadProducts(limit);
    };

    return (
        <section id={id} className={styles.section}>
            <h3 className={`title--third ${styles.title}`}>{title}</h3>
            {products && (
                <CatalogCardList
                    dictionary={dictionary}
                    products={products}
                    setIsNotificationShown={setIsNotificationShown}
                />
            )}
            {isLoading && <Loader />}
            {!isLoading && !products && (
                <NoProducts position={styles.noProducts} showButton={false}>
                    {dictionary?.catalog.noProducts}
                </NoProducts>
            )}
            {pagesQuantity > 1 && !isLoading && (
                <ShowMoreButton
                    id={id}
                    dictionary={dictionary}
                    showAll={showAll}
                    showProducts={showProducts}
                    productsQuantity={productsQuantity}
                />
            )}
        </section>
    );
}
