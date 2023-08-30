import { useEffect } from "react";
import ClipboardJS from "clipboard";
import CopyIcon from "../../GeneralComponents/Icons/CopyIcon";
import { showNotification } from "../../../../../helpers/showNotification";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "../../../../../hooks/useDictionary";
import Constants from "@/app/[lang]/constants";
import styles from "./AccountInfo.module.scss";

const AccountInfo = ({ setIsShownNotification, bankDetails }) => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const monobankLink = Constants.monobankLink;

    useEffect(() => {
        new ClipboardJS(".banks__copy");
    }, []);

    const isMonoBankLink = value => {
        return value.includes(monobankLink);
    };

    return (
        <ul className={styles.bank__list}>
            {bankDetails.map(
                bankInfo =>
                    bankInfo.isActive && (
                        <li
                            key={bankInfo._id}
                            className="banks__copy"
                            data-clipboard-text={bankInfo?.value}
                            onClick={() =>
                                showNotification(setIsShownNotification)
                            }
                        >
                            <div className={styles.bank__info}>
                                <p className={styles.bank__name}>
                                    {lang === "uk"
                                        ? bankInfo.title_uk
                                        : bankInfo.title_en}
                                </p>
                                {bankInfo.name_uk && (
                                    <p className={styles.bank__name}>
                                        {lang === "uk"
                                            ? bankInfo.name_uk
                                            : bankInfo.name_en}
                                    </p>
                                )}
                                <div className={styles.icon__wrapper}>
                                    <CopyIcon fill="currentcolor" />
                                </div>
                            </div>
                            {isMonoBankLink(bankInfo?.value) ? (
                                <a
                                    className={styles.account}
                                    href={bankInfo?.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {dictionary?.charityPage.monobakLink}
                                </a>
                            ) : (
                                <p className={styles.account}>
                                    {bankInfo?.value}
                                </p>
                            )}
                        </li>
                    )
            )}
        </ul>
    );
};

export default AccountInfo;
