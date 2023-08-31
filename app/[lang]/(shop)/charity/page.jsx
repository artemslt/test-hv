"use client";
import BankDetailsSection from "../../components/CharityInfo/BankDetailsSection";
import TextSection from "../../components/CharityInfo/TextSection/TextSection";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./charity.module.scss";
import { en } from "@/dictionaries/en";
// import en from "../../../../dictionaries/en";

const CharityPage = ({ params: { lang } }) => {
    return (
        <section className="container section">
            <h2 className="title--secondary">{en.charityPage.charity}</h2>
            <div className={styles.wrapper__desktop}>
                <div className={styles.wrapper}>
                    <div className={styles.charity__imgThumb}></div>
                    <p className={`text ${styles.about__us} `}>
                        {en.charityPage.charityText}
                    </p>
                </div>
                {/* <TextSection /> */}
            </div>
            {/* <BankDetailsSection /> */}
        </section>
    );
};

export default CharityPage;
