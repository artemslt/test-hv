import Link from "next/link";
import LocaleSwitcher from "../../HeaderShop/LocaleSwitcher/LocaleSwitcher";
import OrdersIcon from "./MobileMenuIcon/OrdersIcon/OrdersIcon";
import ProductsIcon from "./MobileMenuIcon/ProductsIcon/ProductsIcon";
import AddProdutcIcon from "./MobileMenuIcon/AddProductIcon/AddProductIcon";
import CardIcon from "./MobileMenuIcon/CardIcon/CardIcon";
import CrossButton from "../../../CrossButton/CrossButton";
import { useLang } from "../../../../../../../hooks/useLang";
import styles from "./MobileMenuAdmin.module.scss";

export const MobileMenuAdmin = ({
    dictionary,
    showMenu,
    setShowMobileMenu,
}) => {
    const lang = useLang();

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            setShowMobileMenu(false);
        }
    };

    return (
        <div
            className={`${styles.overlay}  ${showMenu && styles.isOpen}`}
            onClick={handleBackdropClick}
        >
            <div
                className={`${styles.modal}  ${showMenu && styles.isShow}  ${
                    !showMenu && styles.isClose
                }`}
            >
                <div className={styles.menu__container}>
                    <CrossButton
                        onClick={() => setShowMobileMenu(false)}
                        styles__button={styles.menu__close}
                    />

                    <LocaleSwitcher />
                </div>

                <div className={styles.menu}>
                    <nav className="text">
                        <Link
                            href={`/${lang}/dashboard`}
                            className={styles.menu__item}
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <OrdersIcon />
                            <p className={styles.menu__item__text}>
                                {dictionary?.menuDashboard.orders}
                            </p>
                        </Link>

                        <Link
                            href={`/${lang}/dashboard/products`}
                            className={styles.menu__item}
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <ProductsIcon />
                            <p className={styles.menu__item__text}>
                                {dictionary?.menuDashboard.allProducts}
                            </p>
                        </Link>

                        <Link
                            href={`/${lang}/dashboard/products/add`}
                            className={styles.menu__item}
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <AddProdutcIcon />
                            <p className={styles.menu__item__text}>
                                {dictionary?.menuDashboard.addProduct}
                            </p>
                        </Link>

                        <Link
                            href={`/${lang}/dashboard/bankdetails`}
                            className={styles.menu__item}
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <CardIcon />
                            <p className={styles.menu__item__text}>
                                {dictionary?.menuDashboard.details}
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
