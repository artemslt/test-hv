import { useScreenSize } from "@/hooks/useScreenSize";

const phone__input_mobile = {
    height: "43px",
    width: "304px",
    color: "#AAA8A4",
    border: "1px solid #AAA8A4",
    fontSize: "16px",
    lineHeight: "1.21",
    fontWeight: "300",
    fontFamily: "Inter, sans-serif",
};

const phone__input_tablet = {
    height: "46px",
    width: "320px",
    color: "#AAA8A4",
    border: "1px solid #AAA8A4",
    fontSize: "18px",
    lineHeight: "1.21",
    fontWeight: "300",
    fontFamily: "Inter, sans-serif",
};

const phone__input_desktop = {
    height: "48px",
    width: "320px",
    color: "#AAA8A4",
    border: "1px solid #AAA8A4",
    fontSize: "18px",
    lineHeight: "1.21",
    fontWeight: "300",
    fontFamily: "Inter, sans-serif",
};
const country__list_mobile = {
    marginTop: "1px",
    width: "304px",
};

const country__list_tablet = {
    marginTop: "1px",
    width: "320px",
};

const useGetPhoneinputSizes = () => {
    const screenSizeName = useScreenSize();

    const getPhoneInputSizes = () => {
        switch (screenSizeName) {
            case "tablet":
                return {
                    phoneInput: phone__input_tablet,
                    countryList: country__list_tablet,
                };
            case "desktop":
                return {
                    phoneInput: phone__input_desktop,
                    countryList: country__list_tablet,
                };

            default:
                return {
                    phoneInput: phone__input_mobile,
                    countryList: country__list_mobile,
                };
        }
    };

    return getPhoneInputSizes();
};

export default useGetPhoneinputSizes;
