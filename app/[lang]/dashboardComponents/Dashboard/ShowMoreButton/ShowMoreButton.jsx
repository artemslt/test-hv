import React from "react";

const ShowMoreButton = ({ dictionary, showMore }) => {
    return (
        <button
            type="button"
            className="button__showMore"
            onClick={showMore}
        >
            {dictionary?.dashboard.showMore}
        </button>
    );
};

export default ShowMoreButton;
