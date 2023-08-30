import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../../../../../../hooks/useLang";
import styles from "./ProductCard.module.scss";

const ProductCart = ({ product, dictionary }) => {
    const { urls, desc } = product;
    const lang = useLang();

    return (
        <Link href={`/${lang}/catalog/${product.id}`} className={styles.card}>
            <div className={styles.thumb}>
                <Image
                    src={urls[0]}
                    alt={dictionary?.productCard.altImage || ""}
                    width={80}
                    height={80}
                    priority={true}
                    className={styles.image}
                />
            </div>

            <div className={styles.description}>
                <p className={styles.name}>{desc.title}</p>
                <p className={styles.characteristics}>
                    {dictionary?.productCard.weight}
                    <span className={styles.values}>{desc?.weight}</span>
                </p>
                <p className={styles.characteristics}>
                    {dictionary?.productCard.portionsQuantity}
                    <span className={styles.values}>{desc?.per_package}</span>
                </p>
            </div>
        </Link>
    );
};

export default ProductCart;
