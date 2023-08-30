import { useState, useEffect } from "react";
import { fetchSimilarProducts } from "../../../../../services/api";
import { useDictionary } from "@/hooks/useDictionary";
import { useLang } from "@/hooks/useLang";
import ProductCardsSlider from "../../GeneralComponents/ProductCardsSlider/ProductCardsSlider";
import styles from "./SimilarProducts.module.scss";
import Loader from "../../GeneralComponents/Loader/Loader";

const SimilarProducts = ({ product, setIsNotificationShown }) => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const findSimilarProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetchSimilarProducts(
                lang,
                product.desc.category
            );
            if (response.data) {
                // find similar products, find current product and leave only 6 from this category
                const shownSimilarProduct = response.data.data
                    .filter(item => item.id !== product.id)
                    .slice(0, 6);
                setSimilarProducts(shownSimilarProduct);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            return error;
        }
    };

    useEffect(() => {
        findSimilarProducts();
    }, [lang]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {similarProducts.length !== 0 && (
                        <ProductCardsSlider
                            slick__slider={styles.similarProducts__slider}
                            title={dictionary?.ProductPage.similarProducts}
                            products={similarProducts}
                            dictionary={dictionary}
                            isLoading={isLoading}
                            setIsNotificationShown={setIsNotificationShown}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default SimilarProducts;
