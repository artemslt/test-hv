import Constants from "@/app/[lang]/constants";
import useGetPhoneinputSizes from "../../../../../hooks/useGetPhoneInputSizes";

export const PhoneInputStyles = ({
    isTouched,
    isFocused,
    phoneInputValue,
    hovered,
}) => {
    const { colorBlack, errorColor, borderColor } = Constants.colors;
    const { phoneInput, countryList } = useGetPhoneinputSizes();

    const dynamicInputStyle = {
        ...phoneInput,
        color: isFocused || phoneInputValue ? colorBlack : phoneInput.color,
        border:
            (isTouched &&
                phoneInputValue.length < 10 &&
                `1px solid ${errorColor}`) ||
            (isTouched && `1px solid ${borderColor}`) ||
            (hovered && `1px solid ${colorBlack}`),
    };

    const dynamicButtonStyle = {
        color: isFocused || phoneInputValue ? colorBlack : borderColor,
        border:
            (isTouched &&
                phoneInputValue.length < 10 &&
                `1px solid ${errorColor}`) ||
            (isTouched && `1px solid ${borderColor}`) ||
            (hovered && `1px solid ${colorBlack}`),
    };

    return { dynamicInputStyle, countryList, dynamicButtonStyle };
};
