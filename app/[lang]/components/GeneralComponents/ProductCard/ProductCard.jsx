import { React } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../../../hooks/useLang";
import Constants from "../../../constants/index";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import AddToCartButton from "../../GeneralComponents/AddToCartButton/AddToCartButton";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ dictionary, product, setIsNotificationShown }) => {
    const pathName = usePathname();
    const lang = useLang();
    const { tablet, desktop } = Constants.screenSizes;
    const { urls, desc } = product;
    const isHomePage = pathName === `/${lang}`;
    
    return (
        <li className={styles.card}>
            <Link href={`/${lang}/catalog/${product.id}`}>
                <div className={styles.thumb}>
                    {isHomePage && (
                        <p className={styles.new}>
                            {dictionary?.productCard.new}
                        </p>
                    )}
                    <Image
                        className={styles.image}
                        src={urls[0] || AltImage}
                        priority={true}
                        alt={dictionary?.productCard.altImage}
                        fill
                        sizes={`(max-width: ${tablet - 1}) 146px, (max-width: ${
                            desktop - 1
                        }) 218px, 200px`}
                    />
                </div>
            </Link>
            <div className={styles.description}>
                <Link href={`/${lang}/catalog/${product.id}`}>
                    <p className={styles.name}>{desc?.title}</p>{" "}
                </Link>
                <p className={styles.characteristics}>
                    {dictionary?.productCard.weight}
                    <span className={styles.values}>
                        {desc?.weight || dictionary?.productCard.noInformation}
                    </span>
                </p>
                <p className={styles.characteristics}>
                    {dictionary?.productCard.portionsQuantity}
                    <span className={styles.values}>
                        {desc?.per_package ||
                            dictionary?.productCard.noInformation}
                    </span>
                </p>
            </div>

            <AddToCartButton
                product={product}
                dictionary={dictionary}
                setIsNotificationShown={setIsNotificationShown}
            />
        </li>
    );
};

export default ProductCard;
