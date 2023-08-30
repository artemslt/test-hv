import { useState, useEffect } from "react";
import { fetchProductsByName } from "../services/api";

export const useSearch = (lang, search) => {
    const [searchProducts, setSearchProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const searchProducts = async search => {
            setIsLoading(true);
            try {
                const response = await fetchProductsByName(lang, search);
                setIsLoading(false);
                setIsError(false);
                const data = response.data;
                data
                    ? setSearchProducts(data.data.slice(0, 3))
                    : (setSearchProducts([]), setIsError(true));
                return;
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };
        searchProducts(search);
    }, [lang, search]);

    return { searchProducts, isLoading, isError };
};
