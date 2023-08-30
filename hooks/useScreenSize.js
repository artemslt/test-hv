import { useState, useLayoutEffect } from "react";
import Constants from "../app/[lang]/constants/index";

export const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const { tablet, desktop } = Constants.screenSizes;
    const { mobileName, tabletName, desktopName } = Constants.screenSizeName;

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let screenSizeName = mobileName;

    switch (true) {
        case width >= tablet && width < desktop: {
            screenSizeName = tabletName;
            break;
        }
        case width >= desktop: {
            screenSizeName = desktopName;
            break;
        }
    }

    return screenSizeName;
};
