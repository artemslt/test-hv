export const showNotification = (setIsShownNotification) => {
    setIsShownNotification(true);
    setTimeout(() => {
        setIsShownNotification(false);
    }, 2000);
};