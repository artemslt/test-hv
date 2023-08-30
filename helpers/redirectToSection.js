export const redirectToSection = (id) => {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView(top);
};