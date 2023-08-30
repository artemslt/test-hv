"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useDictionary } from "../../../../hooks/useDictionary";
import { useToken } from "@/hooks/useToken";
import {
    setAuthHeader,
    fetchProducts,
    deleteProduct,
    fetchProductsByName,
} from "@/services/api";
import { searchProductsSchema } from "@/schemas/searchProductsValidationSchema";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import ProductsList from "../../dashboardComponents/Products/ProductsList/ProductsList";
import SearchForm from "../../dashboardComponents/General/SearchForm/SearchForm";
import NoProducts from "../../components/GeneralComponents/NoProducts/NoProducts";
import ScrollToTopButton from "../../components/GeneralComponents/ScrollToTopButton/ScrollToTopButton";
import styles from "./products.module.scss";

const AllProductsPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const token = useToken();
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isProductAbsent, setIsProductAbsent] = useState(false);
    const [products, setProducts] = useState(null);
    const [search, setSearch] = useState("");

    const loadProducts = useCallback(async () => {
        try {
            setIsProductAbsent(false);
            setIsLoading(true);
            if (token) {
                setAuthHeader(token);
                const response = await fetchProducts(lang);
                const sortedProducts = response.data.sort(
                    (a, b) => b.isAvailable - a.isAvailable
                );
                setProducts(sortedProducts);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    }, [lang, token]);

    // loading products as a result of a user search by poduct name
    const loadProductsByName = useCallback(async () => {
        try {
            setIsLoading(true);
            setProducts(null);
            setIsProductAbsent(false);
            const response = await fetchProductsByName(lang, search);
            const sortedProducts = response.data.data.sort(
                (a, b) => b.isAvailable - a.isAvailable
            );
            setProducts(sortedProducts);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsProductAbsent(true);
            return error;
        }
    }, [lang, search]);

    useEffect(() => {
        if (!search) {
            loadProducts();
        }
    }, [loadProducts, search]);

    useEffect(() => {
        if (search) {
            loadProductsByName();
        }
    }, [loadProductsByName, search]);

    const deleteProductFromList = async id => {
        try {
            setIsDeleting(true);
            if (token) {
                setAuthHeader(token);
                await deleteProduct(id);
                setIsDeleting(false);
                loadProducts();
            }
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    return (
        <section className={`container section`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <h2 className="title--secondary">
                        {dictionary?.productsPage.title}
                    </h2>
                    <div className={styles.search__wrapper}>
                        <SearchForm
                            dictionary={dictionary}
                            isLoading={isLoading}
                            search={search}
                            setSearch={setSearch}
                            placeholder={dictionary?.productsPage.search}
                            validationSchema={searchProductsSchema}
                        />
                    </div>
                    {isLoading && <Loader />}
                    {!isProductAbsent && !isLoading && products && (
                        <ProductsList
                            products={products}
                            deleteProduct={deleteProductFromList}
                            dictionary={dictionary}
                            isDeleting={isDeleting}
                        />
                    )}
                    {isProductAbsent && !isLoading && (
                        <NoProducts
                            position={styles.noProducts}
                            showButton={false}
                        >
                            {dictionary?.productsPage.noProducts}
                        </NoProducts>
                    )}
                    <ScrollToTopButton dictionary={dictionary} />
                </>
            )}
        </section>
    );
};

export default AllProductsPage;
