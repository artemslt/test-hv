import { Field } from "formik";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { PhoneInputStyles } from "./PhoneInputConstants";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({
    phoneInputValue,
    setPhoneInputValue,
    dictionary,
}) => {
    const [isTouched, setIsTouched] = useState(false);
    const [phoneError, setPhoneError] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleMouse = () => {
        setHovered(prevHovered => !prevHovered);
    };
    const { dynamicInputStyle, countryList, dynamicButtonStyle } =
        PhoneInputStyles({ isTouched, isFocused, phoneInputValue, hovered });

    useEffect(() => {
        if (phoneInputValue > 10) {
            setPhoneError(null);
        }
    }, [phoneInputValue]);

    const onFocusInput = () => {
        setIsFocused(true);
        setPhoneError(dictionary.errors.errorPhone);
    };

    const onBlurInput = () => {
        setIsTouched(true);
        setIsFocused(false);
        setPhoneError(dictionary.errors.requiredPhone);
    };
    return (
        <>
            <p className="label">{dictionary?.Checkout.phone}</p>
            <div onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>
                <Field name="phone">
                    {({ field }) => (
                        <PhoneInput
                            inputStyle={dynamicInputStyle}
                            buttonStyle={dynamicButtonStyle}
                            dropdownStyle={countryList}
                            {...field}
                            id="phone"
                            country="ua"
                            regions={"europe"}
                            excludeCountries={["ru", "by"]}
                            onChange={value => {
                                setPhoneInputValue(value);
                                return field.onChange({
                                    target: {
                                        value,
                                        name: field.name,
                                    },
                                });
                            }}
                            onFocus={onFocusInput}
                            onBlur={onBlurInput}
                        />
                    )}
                </Field>
                {phoneError && phoneInputValue?.length < 10 && (
                    <div className="error__message">{phoneError}</div>
                )}
            </div>
        </>
    );
};

export default PhoneInputField;
