const onEscapeCloseModal = (
    setShowMobileMenu,
    setShowFormCallBack,
    setShowSearch
) => {
    const handleKeyDown = e => {
        if (e.code === "Escape") {
            setShowMobileMenu(false);
            setShowFormCallBack(false);
            setShowSearch(false);
        }
    };

    const keyDownEscape = window.addEventListener("keydown", handleKeyDown);
    return () => {
        keyDownEscape;
    };

    return;
};
export default onEscapeCloseModal;
