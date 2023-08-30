"use client";
import React, { useState } from "react";
import { useDictionary } from "../../../../../hooks/useDictionary";
import { useToken } from "@/hooks/useToken";
import { createProduct, setAuthHeader } from "@/services/api";
import { productSchema } from "@/schemas/productValidationSchema";
import ProductForm from "@/app/[lang]/dashboardComponents/Products/Product/ProductForm/ProductForm";
import createProductRequestData from "@/helpers/createProductRequestData";
import { showNotification } from "@/helpers/showNotification";
import Constants from "@/app/[lang]/constants";

const AddProductPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const token = useToken();
    const { placeholders } = Constants;
    const [isLoading, setIsLoading] = useState(false);
    const [isNotificationShown, setIsNotificationShown] = useState(false);

    const initialValues = {
        title_uk: "",
        title_en: "",
        description_en: "",
        description_uk: "",
        category: placeholders[lang],
        compound_uk: "",
        compound_en: "",
        cooking_method_uk: "",
        cooking_method_en: "",
        weight_uk: "",
        weight_en: "",
        expiration_date_uk: "",
        expiration_date_en: "",
        cooking_method_short_uk: "",
        cooking_method_short_en: "",
        per_package: "",
        files: [],
        isAvailable: false,
    };

    const handleSubmit = async (values, { resetForm }) => {
        const data = createProductRequestData(values);
        try {
            setIsLoading(true);
            if (token) {
                setAuthHeader(token);
                const response = await createProduct(data);
                setIsLoading(false);
                resetForm({ values: initialValues });
                window.scroll(0, 0);

                if (response.success) {
                    showNotification(setIsNotificationShown);
                }
            }
        } catch (error) {
            setIsLoading(false);

            return error;
        }
    };

    return (
        <>
            <section className={`container section`}>
                <h2 className={`title--secondary`}>
                    {dictionary?.AddProductPage.title}
                </h2>
                <ProductForm
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                    validationSchema={productSchema}
                    isLoading={isLoading}
                    pageName={Constants.productPageName.add}
                />
                {isNotificationShown && (
                    <div className="notification">
                        {dictionary?.notifications.addProduct}
                    </div>
                )}
            </section>
        </>
    );
};

export default AddProductPage;
