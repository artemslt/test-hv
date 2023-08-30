import { React } from "react";
import Image from "next/image";
import { useLang } from "../../../../../hooks/useLang";
import Constants from "../../../constants/index";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import LinkedInIcon from "../../GeneralComponents/Icons/LinkedInIcon";
import GitHubIcon from "../../GeneralComponents/Icons/GitHubIcon";
import BehanceIcon from "../../GeneralComponents/Icons/BehanceIcon";
import TelegramIcon from "../../GeneralComponents/Icons/TelegramIcon";
import styles from "./DreamTeamCard.module.scss";

const DreamTeamCard = ({ teamItem }) => {
    const { tablet, desktop } = Constants.screenSizes;
    const { name_uk, name_en, photo, linkedin, github, behance, telegram } =
        teamItem;
    const lang = useLang();

    return (
        <li className={styles.card}>
            <div className={styles.thumb}>
                <Image
                    className={styles.image}
                    src={photo || AltImage}
                    priority={true}
                    alt="photo"
                    fill
                    sizes={`(max-width: ${tablet - 1}) 114px, (max-width: ${
                        desktop - 1
                    }) 124px, 220px`}
                />
            </div>

            <p className={styles.name}>{lang === "uk" ? name_uk : name_en}</p>
            <div className={styles.socials}>
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link__icon}
                    >
                        <LinkedInIcon fill="currentColor" />
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link__icon}
                    >
                        <GitHubIcon fill="currentColor" />
                    </a>
                )}
                {behance && (
                    <a
                        href={behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link__icon}
                    >
                        <BehanceIcon fill="currentColor" />
                    </a>
                )}
                {telegram && (
                    <a
                        href={telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link__icon}
                    >
                        <TelegramIcon fill="currentColor" />
                    </a>
                )}
            </div>
        </li>
    );
};

export default DreamTeamCard;
