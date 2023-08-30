import * as yup from "yup";

export const productSchema = dictionary => {
    return yup.object().shape({
        title_uk: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        title_en: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        description_en: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        description_uk: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        compound_uk: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        compound_en: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        cooking_method_uk: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        cooking_method_en: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        weight_uk: yup.string().required(dictionary?.errors.required),
        weight_en: yup.string().required(dictionary?.errors.required),
        expiration_date_uk: yup.string().required(dictionary?.errors.required),
        expiration_date_en: yup.string().required(dictionary?.errors.required),
        cooking_method_short_uk: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        cooking_method_short_en: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.required),
        per_package: yup
            .number()
            .typeError(dictionary?.errors.counterError)
            .required(dictionary?.errors.required),
        files: yup.array(yup.string()).required(),
        isAvailable: yup.boolean(),
        category: yup
            .object()
            .shape({ value: yup.string(), label: yup.string() })
            .required(dictionary?.errors.required),
    });
};
