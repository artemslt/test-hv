import NavigationCategory from "./NavigationCategory/NavigationCategory";
import Constants from "../../../../../constants/index";
import { useScreenSize } from "../../../../../../../hooks/useScreenSize";
import { useLang } from "@/hooks/useLang";
import styles from "./NavigationMenu.module.scss";

const NavigationMenu = ({ setShowMobileMenu = null }) => {
    const lang = useLang();
    const { categoryLink } = Constants;
    const { desktopName } = Constants.screenSizeName;
    const screenSizes = useScreenSize();
    const onLinkClick = () => {
        if (screenSizes === desktopName) {
            return;
        } else {
            setShowMobileMenu(false);
        }
    };
    return (
        <ul className={styles.categories}>
            {categoryLink[lang].map(category => (
                <li key={category.value}>
                    <NavigationCategory
                        id={`${category.value}`}
                        onClick={onLinkClick}
                    >
                        {category.label}
                    </NavigationCategory>
                </li>
            ))}
        </ul>
    );
};

export default NavigationMenu;
