import React, { useEffect, useState } from "react";
import { fetchBankDetails } from "../../../../services/api";
import { useLang } from "@/hooks/useLang";
import Loader from "../GeneralComponents/Loader/Loader";
import AccountInfo from "./AccountInfo/AccountInfo";
import { useDictionary } from "@/hooks/useDictionary";
import styles from "./BankDetailsSection.module.scss";

const BankDetailsSection = () => {
    const [isShownNotification, setIsShownNotification] = useState(false);
    const [bankDetails, setBankDetails] = useState(null);
    const [isActiveBankDetails, setIsActiveBankDetails] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);
    const lang = useLang();
    const dictionary = useDictionary(lang);

    const loadBankDetails = async () => {
        try {
            const response = await fetchBankDetails();
            if (response?.success) {
                setBankDetails(response.data);
                setIsLoaded(true);
                // check if any of bank details has active status
                const hasActiveItem = Object.values(response.data).some(
                    item => item.isActive
                );
                if (hasActiveItem) {
                    setIsActiveBankDetails(true);
                    return;
                }
            }
        } catch (error) {
            setIsLoaded(true);
            return error;
        }
    };

    useEffect(() => {
        loadBankDetails();
    }, []);

    return (
        <section>
            {isLoaded ? (
                <>
                    <h2 className={`title--secondary ${styles.charity__title}`}>
                        {isActiveBankDetails &&
                            dictionary?.charityPage.bankDetails}
                    </h2>
                    {isActiveBankDetails ? (
                        <AccountInfo
                            bankDetails={bankDetails}
                            setIsShownNotification={setIsShownNotification}
                        />
                    ) : (
                        <div className={styles.noActiveBankInfo}>
                            <p>{dictionary?.charityPage.suspendedTitle}</p>
                            <p> {dictionary?.charityPage.glorToUkraine}</p>
                        </div>
                    )}
                </>
            ) : (
                <Loader />
            )}

            {isShownNotification ? (
                <div className="notification">
                    {dictionary?.charityPage.copy}{" "}
                </div>
            ) : (
                ""
            )}
        </section>
    );
};

export default BankDetailsSection;
