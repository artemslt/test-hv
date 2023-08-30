import * as yup from "yup";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|\^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const contactFormSchema = dictionary => {
    return yup.object().shape({
        name: yup
            .string()
            .min(2, dictionary?.errors.minTwoLetters)
            .required(dictionary?.errors.requiredName),
        phone: yup
            .string()
            .min(10, dictionary?.errors.minTenNumbers)
            .required(dictionary?.errors.requiredPhone),
        email: yup
            .string()
            .matches(emailRegex, dictionary?.errors.errorEmail)
            .required(dictionary?.errors.requiredEmail),
        comments: yup.string(),
        accepted_data_collection: yup.boolean().oneOf([true]).required(),
    });
};
