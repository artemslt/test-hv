import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import styles from "./TextSection.module.scss";

const TextSection = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);

    return (
        <section className={`text ${styles.wrapper}`}>
            <p className={styles.about__us}>
                {dictionary?.charityPage.charityText}
            </p>
            <p>{dictionary?.charityPage.callToAction}</p>
            <p>{dictionary?.charityPage.vegitables}</p>
            <p>{dictionary?.charityPage.fruits}</p>
            <p>{dictionary?.charityPage.otherProducts}</p>
        </section>
    );
};

export default TextSection;
