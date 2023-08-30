"use client";
import BankDetailsSection from "../../components/CharityInfo/BankDetailsSection";
import TextSection from "../../components/CharityInfo/TextSection/TextSection";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./charity.module.scss";

const CharityPage = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);

    return (
        <>
            {dictionary ? (
                <section className="container section">
                    <h2 className="title--secondary">
                        {dictionary?.charityPage.charity}
                    </h2>
                    <div className={styles.wrapper__desktop}>
                        <div className={styles.wrapper}>
                            <div className={styles.charity__imgThumb}></div>
                            <p className={`text ${styles.about__us} `}>
                                {dictionary?.charityPage.charityText}
                            </p>
                        </div>
                        <TextSection />
                    </div>
                    <BankDetailsSection />
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CharityPage;
