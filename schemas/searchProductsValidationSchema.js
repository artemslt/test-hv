import * as yup from "yup";

export const searchProductsSchema = dictionary => {
    return yup.object().shape({
        search: yup.string(),
    });
};
