"use client";
import React, { useState, useEffect } from "react";
import { useDictionary } from "../../../../hooks/useDictionary";
import { useScreenSize } from "@/hooks/useScreenSize";
import Constants from "../../constants";
import CatalogNavigation from "../../components/Catalog/CatalogNavigation/CatalogNavigation";
import CatalogSubsection from "../../components/Catalog/CatalogSubsection/CatalogSubsection";
import ScrollToTopButton from "../../components/GeneralComponents/ScrollToTopButton/ScrollToTopButton";
import Loader from "../../components/GeneralComponents/Loader/Loader";

export default function CatalogPage({ params: { lang } }) {
    const dictionary = useDictionary(lang);
    const [breakfasts, setBreakfasts] = useState(null);
    const [soups, setSoups] = useState(null);
    const [mainDishes, setMainDishes] = useState(null);
    const [snacksDrinks, setSnacksDrinks] = useState(null);
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const screenSizeName = useScreenSize();
    const { desktopName } = Constants.screenSizeName;
    const [isAllProductsLoaded, setIsALLProductsloaded] = useState(false);

    useEffect(() => {
        breakfasts &&
            soups &&
            mainDishes &&
            snacksDrinks &&
            setIsALLProductsloaded(true);
    }, [breakfasts, soups, mainDishes, snacksDrinks]);

    useEffect(() => {
        // Check if URL contains a hash (#) and scroll to the target element
        const scrollToSection = () => {
            if (window.location.hash && isAllProductsLoaded) {
                const element = document.querySelector(
                    `${window.location.hash}`
                );
                element.scrollIntoView(top);
            }
        };
        scrollToSection();
    }, [isAllProductsLoaded]);

    return (
        <>
            <section className={`container section`}>
                {!dictionary ? (
                    <Loader />
                ) : (
                    <>
                        <h2 className={`title--secondary`}>
                            {dictionary?.catalog.title}
                        </h2>
                        {screenSizeName !== desktopName && (
                            <CatalogNavigation dictionary={dictionary} />
                        )}
                        <CatalogSubsection
                            id="breakfasts"
                            title={dictionary?.catalog.breakfasts}
                            products={breakfasts}
                            setProducts={setBreakfasts}
                            dictionary={dictionary}
                            setIsNotificationShown={setIsNotificationShown}
                        />
                        <CatalogSubsection
                            id="soups"
                            title={dictionary?.catalog.soups}
                            products={soups}
                            setProducts={setSoups}
                            dictionary={dictionary}
                            setIsNotificationShown={setIsNotificationShown}
                        />
                        <CatalogSubsection
                            id="mainDishes"
                            title={dictionary?.catalog.mainDishes}
                            products={mainDishes}
                            setProducts={setMainDishes}
                            dictionary={dictionary}
                            setIsNotificationShown={setIsNotificationShown}
                        />
                        <CatalogSubsection
                            id="snacksDrinks"
                            title={dictionary?.catalog.snacksDrinks}
                            products={snacksDrinks}
                            setProducts={setSnacksDrinks}
                            dictionary={dictionary}
                            setIsNotificationShown={setIsNotificationShown}
                        />
                        <ScrollToTopButton dictionary={dictionary} />
                    </>
                )}
            </section>
            {isNotificationShown && (
                <div className={`notification`}>
                    {dictionary?.notifications.addedToCart}
                </div>
            )}
        </>
    );
}
