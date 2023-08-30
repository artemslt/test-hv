"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../../../../hooks/useCart";
import { useDictionary } from "../../../../hooks/useDictionary";
import BackButton from "../../components/GeneralComponents/BackButton/BackButton";
import CartCardList from "../../components/Cart/CartCardList/CartCardList";
import NoProducts from "../../components/GeneralComponents/NoProducts/NoProducts";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./cart.module.scss";

const CartPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const { cartProducts, isLoading, cartIds } = useCart(lang);

    return (
        <section className={`container section ${styles.section}`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <BackButton />
                    <h2 className={`title--secondary`}>
                        {dictionary?.cart.title}
                    </h2>
                    {isLoading ? (
                        <Loader />
                    ) : cartProducts && cartIds ? (
                        <div className={styles.cart__wrapper}>
                            <CartCardList
                                cart={cartProducts}
                                dictionary={dictionary}
                            />
                            <div className={styles.button__wrapper}>
                                <Link href={`/${lang}/checkout`}>
                                    <button className={`button`}>
                                        {dictionary?.buttons.checkout}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <NoProducts>{dictionary?.cart.empty}</NoProducts>
                    )}
                </>
            )}
        </section>
    );
};

export default CartPage;
