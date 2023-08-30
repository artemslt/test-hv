import Lang from "./Lang/Lang";
import styles from "../LocaleSwitcher/LocaleSwitcher.module.scss";

const languages = [
    {
        locale: "uk",
        name: "Укр",
    },
    {
        locale: "en",
        name: "En",
    },
];

export default function LocaleSwitcher() {
    return (
        <div className={styles.localeSwitcher}>
            <ul className={styles.localeSwitcher__lang}>
                {languages.map(lang => (
                    <Lang key={lang.locale} switchLanguage={lang} />
                ))}
            </ul>

            <span className={styles.localeSwitcher__sign}></span>
        </div>
    );
}
