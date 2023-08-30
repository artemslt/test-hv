import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeCartQuantity } from "../../../../../redux/cart/cartSlice";
import { useLang } from "@/hooks/useLang";
import { removeItemFromCart } from "../../../../../redux/cart/cartSlice";
import Constants from "../../../constants/index";
import Counter from "../../GeneralComponents/Counter/Counter";
import RemoveItemButton from "../../GeneralComponents/RemoveItemButton/RemoveItemButton";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import styles from "./CartCard.module.scss";

const CartCard = ({ cartItem, dictionary }) => {
    const lang = useLang();
    const dispatch = useDispatch();
    const { tablet, desktop } = Constants.screenSizes;
    const { urls, desc } = cartItem;

    const removeItem = () => {
        dispatch(removeItemFromCart(cartItem.id));
    };

    const setNewValue = value => {
        dispatch(changeCartQuantity(value));
    };

    return (
        <div className={styles.card}>
            <Link href={`/${lang}/catalog/${cartItem.id}`}>
                <div className={styles.thumb}>
                    <Image
                        src={urls[0] || AltImage}
                        alt={dictionary?.productCard.altImage}
                        fill
                        priority={true}
                        className={styles.image}
                        sizes={`(max-width: ${tablet - 1}) 134px, (max-width: ${
                            desktop - 1
                        }) 186px, 154px`}
                    />
                </div>
            </Link>
            <div className={styles.description}>
                <div>
                    <Link href={`/${lang}/catalog/${cartItem.id}`}>
                        <p className={styles.name}>{desc?.title}</p>
                    </Link>
                    <p className={styles.characteristics}>
                        {dictionary?.productCard.weight}
                        <span className={styles.values}>{desc?.weight}</span>
                    </p>
                    <p className={styles.characteristics}>
                        {dictionary?.productCard.portionsQuantity}
                        <span className={styles.values}>
                            {desc?.per_package}
                        </span>
                    </p>
                </div>
                <Counter item={cartItem} setNewValue={setNewValue} />
            </div>
            <RemoveItemButton onClick={removeItem} />
        </div>
    );
};

export default CartCard;
