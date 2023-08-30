import PhoneIcon from "../../../Icons/PhoneIcon";
import Constants from "../../../../../constants/index";
import styles from "./Call.module.scss";
import { useScreenSize } from "@/hooks/useScreenSize";

const Call = ({ setShowMobileMenu = null }) => {
    const { desktopName } = Constants.screenSizeName;
    const { telNumber } = Constants;
    const screenSize = useScreenSize();

    const onLinkClick = () => {
        if (screenSize === desktopName) {
            return;
        } else {
            setShowMobileMenu(false);
        }
    };
    return (
        <a
            href={`tel:${telNumber}`}
            target="_blank"
            onClick={onLinkClick}
            className={styles.call}
            rel="noopener noreferrer"
        >
            <div className={styles.icon}>
                <PhoneIcon fill="currentColor" />
            </div>
            <p className={styles.text}>{telNumber}</p>
        </a>
    );
};

export default Call;
