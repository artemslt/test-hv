import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import styles from "./ProductInfo.module.scss";

const ProductInfo = ({ product }) => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    return (
        <div className={styles.product__wrapper}>
            <h3 className={styles.title}>
                {dictionary?.ProductPage.description}
            </h3>
            <p className={styles.product__text}>
                {product.desc.description}
            </p>
            <h3 className={styles.title}>{dictionary?.ProductPage.content}</h3>
            <p className={styles.product__text}>
                {product.desc.compound}
            </p>
            <h3 className={styles.title}>
                {dictionary?.ProductPage.cookingMethod}
            </h3>
            <p className={styles.product__text}>
                {product.desc.cooking_method}
            </p>
            <h3 className={styles.title}>
                {dictionary?.ProductPage.characteristic}
            </h3>

            <ul className={styles.characteristics__wrapper}>
                <li>
                    <span className={styles.product__characteristic}>
                        {dictionary?.ProductPage.howToCook}
                    </span>
                    <span className={styles.product__text}>
                        {product.desc.cooking_method_short}
                    </span>
                </li>
                <li>
                    <span className={styles.product__characteristic}>
                        {dictionary?.ProductPage.numberOfServings}
                    </span>
                    <span className={styles.product__text}>{product.desc.per_package}</span>
                </li>
                <li>
                    <span className={styles.product__characteristic}>
                        {dictionary?.ProductPage.expirationDate}
                    </span>
                    <span className={styles.product__text}>{product.desc.expiration_date}</span>
                </li>
                <li>
                    <span className={styles.product__characteristic}>
                        {dictionary?.ProductPage.weight}
                    </span>
                    <span className={styles.product__text}>{product.desc.weight}</span>
                </li>
            </ul>
        </div>
    );
};

export default ProductInfo;
