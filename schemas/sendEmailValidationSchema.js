import * as yup from "yup";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|\^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const emailSchema = dictionary => {
    return yup.object().shape({
        email: yup
            .string(dictionary?.errors.email)
            .matches(emailRegex, dictionary?.errors.email)
            .max(64, dictionary?.errors.emailMax)
            .required(dictionary?.errors.required),
    });
};
