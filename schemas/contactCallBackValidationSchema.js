import * as yup from "yup";

const phoneRegex =/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/

export const contactCallBackSchema = ( dictionary ) => {
    return yup.object().shape({
        name: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.requiredName),
        phone: yup
            .string()
            .matches(phoneRegex, dictionary?.errors.errorPhone)
            .required(dictionary?.errors.requiredPhone),
       
    });
};
