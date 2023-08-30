import * as yup from "yup";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const passwordSchema = dictionary => {
    return yup.object().shape({
        password: yup
            .string(dictionary?.errors.password)
            .matches(passwordRegex, dictionary?.errors.password)
            .required(dictionary?.errors.required),
    });
};
