import { useScreenSize } from "../../../../../../hooks/useScreenSize";
import Constants from "../../../../constants/index";
import HeaderDesktop from "../HeaderShop/HeaderDesktop/HeaderDesktop";
import HeaderMobAndTablet from "./HeaderMobAndTablet/HeaderMobAndTablet";

const HeaderShop = ({ dictionary }) => {
    const screenSizeName = useScreenSize();
    const { desktopName } = Constants.screenSizeName;

    return (
        <>
            {screenSizeName !== desktopName && (
                <HeaderMobAndTablet dictionary={dictionary} />
            )}

            {screenSizeName === desktopName && (
                <HeaderDesktop dictionary={dictionary} />
            )}
        </>
    );
};

export default HeaderShop;
