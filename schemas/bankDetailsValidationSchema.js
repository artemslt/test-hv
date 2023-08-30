import * as yup from "yup";

const ibanRegex = /^(\S{29})$/;
const cardRegex = /^(\d{4}\s){3}\d{4}$/;
const urlRegex = /^https:\/\//;
const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|\^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const bankDetailsIbanSchema = dictionary => {
    return yup.object().shape({
        value: yup.string().trim().matches(ibanRegex).required(),
        isActive: yup.boolean(),
    });
};

export const bankDetailsCardNumberSchema = dictionary => {
    return yup.object().shape({
        value: yup.string().matches(cardRegex).required(),
        isActive: yup.boolean(),
    });
};
export const monoBankDetailsSchema = dictionary => {
    return yup.object().shape({
        value: yup.string().matches(urlRegex).required(),
        isActive: yup.boolean(),
    });
};


export const bankDetailsPayPalSchema = dictionary => {
    return yup.object().shape({
        value: yup.string().trim().matches(emailRegex).required(),
        isActive: yup.boolean(),
    });
};