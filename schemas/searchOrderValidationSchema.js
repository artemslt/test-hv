import * as yup from "yup";

const orderNumberRegex = /^\d{7}$/;

export const searchOrderSchema = dictionary => {
    return yup.object().shape({
        search: yup
            .string(dictionary?.errors.orderNumbersQuantity)
            .matches(orderNumberRegex, dictionary?.errors.orderNumbersQuantity),
    });
};
