"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchOneProductById } from "../../../../../services/api";
import { useDictionary } from "../../../../../hooks/useDictionary";
import ProductInfo from "../../../components/ProductPage/ProductInfo/ProductInfo";
import BackButton from "@/app/[lang]/components/GeneralComponents/BackButton/BackButton";
import ProductImages from "../../../components/ProductPage/ProductImages/ProductImages";
import Loader from "@/app/[lang]/components/GeneralComponents/Loader/Loader";
import AddToCartButton from "../../../components/GeneralComponents/AddToCartButton/AddToCartButton";
import SimilarProducts from "../../../../[lang]/components/ProductPage/SimilarProducts/SimilarProducts";
import ErrorPage from "../../../components/GeneralComponents/ErrorPage/ErrorPage";
import Backdrop from "@/app/[lang]/components/GeneralComponents/Backdrop/Backdrop";
import ModalImagesSlider from "@/app/[lang]/components/ProductPage/ModalImageSlider/ModalImagesSlider";
import { useScreenSize } from "@/hooks/useScreenSize";
import styles from "./product.module.scss";

const ProductPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const [product, setProduct] = useState(null);
    const [isProductExist, setIsProductExist] = useState(true);
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const { product: productId } = useParams();
    const screenSizeName = useScreenSize();
    // scroll to the top of page - https://github.com/vercel/next.js/issues/28778

    useEffect(() => {
        setTimeout(() => {
            window.scroll(0, 0);
        }, 50);
    }, []);

    const fetchCurrentProduct = async () => {
        try {
            const data = await fetchOneProductById(lang, productId);
            if (data.success) {
                setProduct(data.data);
                return;
            }
            setIsProductExist(false);
        } catch (error) {
            return error;
        }
    };
    useEffect(() => {
        fetchCurrentProduct();
    }, [lang, productId]);

    const [localShowModal, setLocalShowModal] = useState(false);

    const openModal = () => {
        if (screenSizeName === "mobile") {
            return;
        }

        setLocalShowModal(true);
    };
    const closeModal = () => {
        setLocalShowModal(false);
    };

    return (
        <>
            {isProductExist ? (
                <>
                    {isProductExist && product ? (
                        <>
                            <section className="container section">
                                <BackButton />
                                <div className={styles.title__wrapper}>
                                    <h2
                                        className={`title--secondary ${styles.product__title}`}
                                    >
                                        {product.desc.title}
                                    </h2>
                                </div>
                                <div className={styles.wrapper}>
                                    <ProductImages
                                        product={product}
                                        openModal={openModal}
                                    />
                                    <div>
                                        <ProductInfo product={product} />

                                        <AddToCartButton
                                            customStyles={
                                                styles.product__button
                                            }
                                            product={product}
                                            dictionary={dictionary}
                                            setIsNotificationShown={
                                                setIsNotificationShown
                                            }
                                        />
                                    </div>
                                </div>

                                <SimilarProducts
                                    product={product}
                                    setIsNotificationShown={
                                        setIsNotificationShown
                                    }
                                />

                                <Backdrop
                                    showModal={localShowModal}
                                    closeModal={closeModal}
                                    isOnEscClick
                                >
                                    <ModalImagesSlider
                                        setLocalShowModal={setLocalShowModal}
                                        product={product}
                                        closeModal={closeModal}
                                    />
                                </Backdrop>
                            </section>

                            {isNotificationShown && (
                                <div className={`notification`}>
                                    {dictionary?.notifications.addedToCart}
                                </div>
                            )}
                        </>
                    ) : (
                        <Loader dictionary={dictionary} />
                    )}
                </>
            ) : (
                <ErrorPage
                    dictionary={dictionary}
                    buttonName={dictionary?.buttons.goToCatalog}
                    errorMessage={dictionary?.ProductPage.errorMessage}
                    link={"catalog"}
                />
            )}
        </>
    );
};

export default ProductPage;
