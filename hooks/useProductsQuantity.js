import { useScreenSize } from "@/hooks/useScreenSize";
import Constants from "../app/[lang]/constants/index";

export const useProductsQuantity = () => {
    const screenSizeName = useScreenSize();
    const { mobileName, tabletName, desktopName } = Constants.screenSizeName;
    const { mobileQuantity, tabletQuantity, desktopQuantity } =
        Constants.catalogProductsQuantity;

    const getProductsQuantity = () => {
        switch (screenSizeName) {
            case mobileName:
                return mobileQuantity;
            case tabletName:
                return tabletQuantity;
            case desktopName:
                return desktopQuantity;
        }
    };

    return getProductsQuantity();
};
