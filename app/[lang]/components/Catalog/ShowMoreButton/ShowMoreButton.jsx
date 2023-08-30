import React from "react";
import { redirectToSection } from "@/helpers/redirectToSection";

const ShowMoreButton = ({
    id,
    dictionary,
    showAll,
    showProducts,
    productsQuantity,
}) => {
    const showMoreOrLessProducts = () => {
        if (showAll) {
            showProducts(productsQuantity);
            redirectToSection(id);
        } else {
            showProducts();
        }
    };
    return (
        <button
            type="button"
            className="button__showMore"
            onClick={showMoreOrLessProducts}
        >
            {showAll
                ? dictionary?.catalog.lessProducts
                : dictionary?.catalog.moreProducts}
        </button>
    );
};

export default ShowMoreButton;
