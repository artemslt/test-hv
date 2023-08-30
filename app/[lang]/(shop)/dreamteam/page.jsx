"use client";
import React from "react";
import Link from "next/link";
import { useDictionary } from "../../../../hooks/useDictionary";
import Constants from "../../constants";
import BackButton from "../../components/GeneralComponents/BackButton/BackButton";
import DreamTeamCardList from "../../components/DreamTeam/DreamTeamCardList/DreamTeamCardList";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./dreamteam.module.scss";

const DreamTeamPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const {
        projectManager,
        assistant,
        webDesigners,
        testers,
        developers,
        junfolioLink,
    } = Constants;

    return (
        <section className={`container section ${styles.section}`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <BackButton />
                    <h2 className={`title--secondary`}>
                        {dictionary?.teamPage.title}
                    </h2>
                    <section className={styles.about}>
                        <p className={`text ${styles.about__text}`}>
                            {dictionary?.teamPage.aboutFirstPart}
                        </p>
                        <p className={`text ${styles.about__text}`}>
                            {dictionary?.teamPage.aboutSecondPart}
                        </p>
                        <p className={`text ${styles.about__text}`}>
                            {dictionary?.teamPage.aboutThirdPart}
                            <a
                                href={junfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {dictionary?.teamPage.junfolio}
                            </a>
                            {dictionary?.teamPage.aboutFourthPart}
                        </p>
                        <p className="text--secondary">
                            {dictionary?.teamPage.aboutFifthPart}
                        </p>
                    </section>
                    <div className={styles.subsection__wrapper}>
                        <section
                            className={`title--third ${styles.subsection}`}
                        >
                            <h3 className={`title--third ${styles.subtitle}`}>
                                {dictionary?.teamPage.projectManager}
                            </h3>
                            <DreamTeamCardList team={projectManager} />
                        </section>
                        <section
                            className={`title--third ${styles.subsection}`}
                        >
                            <h3 className={`title--third ${styles.subtitle}`}>
                                {dictionary?.teamPage.assistant}
                            </h3>
                            <DreamTeamCardList team={assistant} />
                        </section>
                    </div>
                    <section className={`title--third ${styles.subsection}`}>
                        <h3 className={`title--third ${styles.subtitle}`}>
                            {dictionary?.teamPage.webDesigners}
                        </h3>
                        <DreamTeamCardList team={webDesigners} />
                    </section>
                    <section className={`title--third ${styles.subsection}`}>
                        <h3 className={`title--third ${styles.subtitle}`}>
                            {dictionary?.teamPage.testers}
                        </h3>
                        <DreamTeamCardList team={testers} />
                    </section>
                    <section className={`title--third ${styles.subsection}`}>
                        <h3 className={`title--third ${styles.subtitle}`}>
                            {dictionary?.teamPage.developers}
                        </h3>
                        <DreamTeamCardList team={developers} />
                    </section>
                    <div className={styles.button__wrapper}>
                        <Link href={`/${lang}/`}>
                            <button type="button" className="button">
                                {dictionary?.teamPage.button}
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default DreamTeamPage;
