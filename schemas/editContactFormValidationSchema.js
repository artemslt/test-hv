import * as yup from "yup";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|\^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const editContactFormSchema = dictionary => {
    return yup.object().shape({
        name: yup.string().min(2, dictionary?.errors.minTwoLetters),
        phone: yup.string().min(10, dictionary?.errors.minTenNumbers),
        email: yup.string().matches(emailRegex, dictionary?.errors.errorEmail),
        comments: yup.string(),
        connection_type: yup
            .object()
            .shape({ value: yup.string(), label: yup.string() }),
    });
};
