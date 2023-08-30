import PhoneIcon from "../../GeneralComponents/Icons/PhoneIcon";
import EmailIcon from "../../GeneralComponents/Icons/EmailIcon";
import Constants from "@/app/[lang]/constants";
import styles from "./FooterContactsList.module.scss";

const FooterContacts = () => {
    const {telNumber, email } = Constants
    return (
        <ul className={styles.contacts__list}>
            <li>
                <a
                    className={styles.contacts__item}
                    href={`tel:${telNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.icon__wrapper}>
                        <PhoneIcon fill="currentcolor" />
                    </div>
                    <span>{telNumber}</span>
                </a>
            </li>

            <li>
                <a
                    className={styles.contacts__item}
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.icon__wrapper}>
                        <EmailIcon fill="currentcolor" />
                    </div>
                    <span>{email}</span>
                </a>
            </li>
        </ul>
    );
};

export default FooterContacts;
