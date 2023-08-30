import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
    removeItemFromCart,
    changeCartQuantity,
} from "../../../../../redux/cart/cartSlice";
import { useLang } from "@/hooks/useLang";
import Counter from "../../GeneralComponents/Counter/Counter";
import RemoveItemButton from "../../GeneralComponents/RemoveItemButton/RemoveItemButton";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import Constants from "../../../constants/index";
import styles from "./CheckoutCard.module.scss";

const CheckoutCard = ({ cartItem, dictionary }) => {
    const { tablet, desktop } = Constants.screenSizes;
    const dispatch = useDispatch();
    const { urls, desc } = cartItem;
    const lang = useLang();
    const setNewValue = value => {
        dispatch(changeCartQuantity(value));
    };

    const removeItem = () => {
        dispatch(removeItemFromCart(cartItem.id));
    };

    return (
        <div className={styles.card}>
            <Link href={`/${lang}/catalog/${cartItem.id}`}>
                <div className={styles.card__thumb}>
                    <Image
                        src={urls[0] || AltImage}
                        alt={dictionary?.productCard.altImage || ""}
                        fill
                        priority={true}
                        className={styles.card__image}
                        sizes={`(max-width: ${tablet - 1}) 80px, (max-width: ${
                            desktop - 1
                        }) 121px`}
                    />
                </div>
            </Link>
            <div className={styles.card__description}>
                <div>
                    <Link href={`/${lang}/catalog/${cartItem.id}`}>
                        <p className={styles.card__name}>{desc?.title}</p>{" "}
                    </Link>
                </div>
                <Counter item={cartItem} setNewValue={setNewValue} />
            </div>
            <RemoveItemButton onClick={removeItem} />
        </div>
    );
};

export default CheckoutCard;
