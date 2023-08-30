import Constants from "../app/[lang]/constants/index";

const findLabelByValue = (list, value) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].value === value) {
            return list[i].label;
        }
    }
    return null;
};
const createProductRequestData = values => {
    const { categoryOption } = Constants;

    const formData = new FormData();

    formData.append("desc_en.title", values.title_en);
    formData.append("desc_en.compound", values.compound_en);
    formData.append("desc_en.description", values.description_en);
    formData.append("desc_en.cooking_method", values.cooking_method_en);
    formData.append("desc_en.weight", values.weight_en);
    formData.append("desc_en.expiration_date", values.expiration_date_en);
    formData.append(
        "desc_en.cooking_method_short",
        values.cooking_method_short_en
    );
    formData.append(
        "desc_en.category",
        findLabelByValue(categoryOption.en, values.category.value)
    );
    formData.append("desc_en.per_package", values.per_package);
    formData.append("desc_uk.title", values.title_uk);
    formData.append("desc_uk.compound", values.compound_uk);
    formData.append("desc_uk.description", values.description_uk);
    formData.append("desc_uk.cooking_method", values.cooking_method_uk);
    formData.append("desc_uk.weight", values.weight_uk);
    formData.append("desc_uk.expiration_date", values.expiration_date_uk);
    formData.append(
        "desc_uk.cooking_method_short",
        values.cooking_method_short_uk
    );
    formData.append(
        "desc_uk.category",
        findLabelByValue(categoryOption.uk, values.category.value)
    );
    formData.append("desc_uk.per_package", values.per_package);
    formData.append("isAvailable", values.isAvailable);

    for (let i = 0; i < values.files.length; i++) {
        formData.append("image", values.files[i]);
    }

    return formData;
};

export default createProductRequestData;
