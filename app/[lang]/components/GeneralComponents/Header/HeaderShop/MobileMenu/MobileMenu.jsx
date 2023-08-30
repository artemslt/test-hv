import { useEffect } from "react";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import CrossButton from "../../../CrossButton/CrossButton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HomeIcon from "../../../Icons/HomeIcon";
import CatalogIcon from "../../../Icons/CatalogIcon";
import HeartIcon from "../../../Icons/HeartIcon";
import Call from "../CallUs/Call";
import ButtonCallBack from "../ButtonCallBack/ButtonCallBack";
import LinkPage from "../LinkPage/LinkPage";
import styles from "../MobileMenu/MobileMenu.module.scss";

const MobileMenu = ({
    dictionary,
    showMenu,
    setShowMobileMenu,
    setShowFormCallBack,
}) => {
    useEffect(() => {
        showMenu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
        if (showMenu) {
            const element = document.querySelector("#menu");
            element.scrollTo(top);
        }
    }, [showMenu]);

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            setShowMobileMenu(false);
            setShowFormCallBack(false);
        }
    };
    return (
        <div
            className={`${styles.overlay}  ${showMenu && styles.isOpen}`}
            onClick={handleBackdropClick}
        >
            <div
                id="menu"
                className={`${styles.menu}  ${showMenu && styles.isShow}  ${
                    !showMenu && styles.isClose
                } `}
            >
                <div className={styles.menu__container}>
                    <CrossButton
                        onClick={() => {
                            setShowMobileMenu(false);
                        }}
                        styles__button={styles.menu__close}
                    />
                    <LocaleSwitcher />
                </div>
                <nav className="text">
                    <LinkPage
                        icon={<HomeIcon fill="currentColor" />}
                        dictionary={dictionary}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                    <LinkPage
                        page="catalog"
                        icon={<CatalogIcon fill="currentColor" />}
                        dictionary={dictionary}
                        setShowMobileMenu={setShowMobileMenu}
                    />

                    <NavigationMenu setShowMobileMenu={setShowMobileMenu} />

                    <LinkPage
                        page="charity"
                        icon={<HeartIcon fill="currentColor" />}
                        dictionary={dictionary}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                </nav>
                <Call setShowMobileMenu={setShowMobileMenu} />

                <ButtonCallBack
                    dictionary={dictionary}
                    setShowFormCallBack={setShowFormCallBack}
                />
            </div>
        </div>
    );
};
export default MobileMenu;
