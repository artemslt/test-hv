import Constants from "../../../constants/index";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import styles from "./SocialMediaLinks.module.scss";

const SocialMedia = () => {
    const { instagram, facebook } = Constants.socialMediaLinks;

    return (
        <ul className={styles.socials__list}>
            <li>
                <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socials__item}
                >
                    <Facebook fill="currentcolor" />
                </a>
            </li>
            <li>
                <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socials__item}
                >
                    <Instagram fill="currentcolor" />
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;
