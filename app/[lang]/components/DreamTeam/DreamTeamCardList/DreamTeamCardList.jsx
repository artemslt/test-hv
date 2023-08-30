import React from "react";
import DreamTeamCard from "../DreamTeamCard/DreamTeamCard";
import styles from "./DreamTeamCardList.module.scss";

const DreamTeamCardList = ({ team }) => {
    return (
        <ul className={styles.list}>
            {team.map(teamItem => (
                <DreamTeamCard key={teamItem.name_en} teamItem={teamItem} />
            ))}
        </ul>
    );
};

export default DreamTeamCardList;
