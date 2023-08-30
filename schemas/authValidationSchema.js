import * as yup from "yup";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|\^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const authSchema = dictionary => {
    return yup.object().shape({
        login: yup
            .string(dictionary?.errors.email)
            .matches(emailRegex, dictionary?.errors.email)
            .max(64, dictionary?.errors.emailMax)
            .required(dictionary?.errors.required),
        password: yup
            .string(dictionary?.errors.password)
            .matches(passwordRegex, dictionary?.errors.password)
            .required(dictionary?.errors.required),
    });
};
