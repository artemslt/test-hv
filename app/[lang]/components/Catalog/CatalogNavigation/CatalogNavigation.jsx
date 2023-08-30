import React from "react";
import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./CatalogNavigation.module.scss";

export default function CatalogNavigation({ dictionary }) {
    return (
        <nav className={styles.list}>
            <NavigationButton id="breakfasts">
                {dictionary?.catalog.breakfasts}
            </NavigationButton>
            <NavigationButton id="soups">
                {dictionary?.catalog.soups}
            </NavigationButton>
            <NavigationButton id="mainDishes">
                {dictionary?.catalog.mainDishes}
            </NavigationButton>

            <NavigationButton id="snacksDrinks">
                {dictionary?.catalog.snacksDrinks}
            </NavigationButton>
        </nav>
    );
}
