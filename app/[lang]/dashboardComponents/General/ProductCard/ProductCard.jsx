import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { onButtonCloseModal } from "../../../../../helpers/onButtonCloseModal";
import Counter from "@/app/[lang]/components/GeneralComponents/Counter/Counter";
import TrashIcon from "../TrashIcon/TrashIcon";
import EditIcon from "../EditIcon/EditIcon";
import DeleteProductModal from "../DeleteProductModal/DeleteProductModal";
import styles from "./ProductCard.module.scss";

const ProductCard = ({
    dictionary,
    product,
    title,
    per_package,
    weight,
    id,
    isCounterShown = false,
    isEditShown = false,
    deleteProduct,
    changeProduct,
    isAvailable = true,
    isDeleting = false,
}) => {
    const [showModal, setShowModal] = useState(false);
    const lang = useLang();

    const deleteProductFromList = async () => {
        await onButtonCloseModal(setShowModal);
        await deleteProduct(id);
    };

    const updateProduct = value => {
        changeProduct(value, id);
    };

    return (
        <>
            <div className={styles.card__wrapper}>
                <div
                    className={`${styles.title__wrapper} ${
                        !isAvailable && styles.unavailable
                    }`}
                >
                    <p className={styles.title}>{title}</p>
                    <button
                        type="button"
                        className={`${styles.button} ${styles.icon_trash}`}
                        onClick={() => setShowModal(true)}
                    >
                        <TrashIcon fill="currentColor" />
                    </button>
                </div>
                <div className={styles.info__wrapper}>
                    <div className={styles.characteristics__wrapper}>
                        <p
                            className={`${styles.characteristics} ${
                                !isAvailable && styles.unavailable
                            }`}
                        >
                            {dictionary?.productCard.weight}
                            <span
                                className={`${styles.characteristics__value} ${
                                    !isAvailable && styles.unavailable
                                }`}
                            >
                                {weight}
                            </span>
                        </p>
                        <p
                            className={`${styles.characteristics} ${
                                !isAvailable && styles.unavailable
                            }`}
                        >
                            {dictionary?.productCard.portionsQuantity}
                            <span
                                className={`${styles.characteristics__value} ${
                                    !isAvailable && styles.unavailable
                                }`}
                            >
                                {per_package}
                            </span>
                        </p>
                    </div>
                    {isCounterShown && (
                        <Counter
                            item={product}
                            dictionary={dictionary}
                            setNewValue={updateProduct}
                        />
                    )}
                    {isEditShown && (
                        <Link className={styles.link}
                            href={`/${lang}/dashboard/products/product/${id}`}
                        >
                            <button
                                type="button"
                                className={styles.button}
                                onClick={changeProduct}
                            >
                                <EditIcon fill="currentColor" />
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <DeleteProductModal
                dictionary={dictionary}
                showModal={showModal}
                setShowModal={setShowModal}
                deleteProduct={deleteProductFromList}
                title={
                    isCounterShown
                        ? dictionary?.orderPage.deleteProduct
                        : dictionary?.productsPage.deleteProduct
                }
                isDeleting={isDeleting}
            />
        </>
    );
};

export default ProductCard;
