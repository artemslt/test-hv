import React, { useEffect } from "react";
import NoProducts from "../../../../NoProducts/NoProducts";
import Loader from "../../../../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import { useSearch } from "../../../../../../../../hooks/useSearch";
import { isEmpty } from "@/helpers/isEmpty";
import styles from "./ProductsList.module.scss";

const ProductList = ({
    search,
    dictionary,
    lang,
    showWindowSearch,
    setShowSearch = null,
    clearInput,
}) => {
    const { searchProducts, isLoading, isError } = useSearch(lang, search);
    const empty = isEmpty(search);

    useEffect(() => {
        empty ? setShowSearch(false) : setShowSearch(true);
    }, [empty, setShowSearch]);

    return (
        <div className={`${styles.popUp} ${showWindowSearch && styles.isOpen}`}>
            {isLoading && <Loader />}
            {searchProducts?.length > 0 && (
                <ul className={styles.searchProducts}>
                    {searchProducts?.map(product => (
                        <li
                            key={product.id}
                            className={styles.product}
                            onClick={() => {
                                clearInput();
                                setShowSearch(false);
                            }}
                        >
                            <ProductCard
                                key={product.id}
                                product={product}
                                dictionary={dictionary}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {isError && (
                <NoProducts position={styles.noproducts} showButton={false}>
                    {dictionary?.header.notFound}
                </NoProducts>
            )}
        </div>
    );
};

export default ProductList;
