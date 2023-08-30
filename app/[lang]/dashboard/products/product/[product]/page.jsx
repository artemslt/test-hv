"use client";
import React, { useEffect, useState } from "react";
import { useDictionary } from "../../../../../../hooks/useDictionary";
import { useParams, useRouter } from "next/navigation";
import { useToken } from "@/hooks/useToken";
import {
    fetchOneProductById,
    setAuthHeader,
    upDateProduct,
} from "@/services/api";
import { productSchema } from "@/schemas/productValidationSchema";
import ProductForm from "@/app/[lang]/dashboardComponents/Products/Product/ProductForm/ProductForm";
import createProductRequestData from "@/helpers/createProductRequestData";
import Loader from "../../../../components/GeneralComponents/Loader/Loader";
import Constants from "../../../../constants";
import BackButton from "@/app/[lang]/components/GeneralComponents/BackButton/BackButton";
import styles from "./update.module.scss";

const UpdateProductPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const { product: productId } = useParams();
    const router = useRouter();
    const token = useToken();
    const { categoryOption } = Constants;

    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [initialValues, setInitialValues] = useState({});

    const findCategoryStateByLabel = (list, label) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].label === label) {
                return list[i];
            }
        }
        return null;
    };

    useEffect(() => {
        const loadOrder = async () => {
            try {
                setIsLoading(true);
                if (token) {
                    setAuthHeader(token);
                    const response = await fetchOneProductById("", productId);
                    if (response.success) {
                        const cat = findCategoryStateByLabel(
                            categoryOption[lang],
                            response.data[`desc_${lang}`].category
                        );

                        setInitialValues({
                            title_uk: response.data.desc_uk.title,
                            title_en: response.data.desc_en.title,
                            description_en: response.data.desc_en.description,
                            description_uk: response.data.desc_uk.description,
                            category: cat,
                            compound_uk: response.data.desc_uk.compound,
                            compound_en: response.data.desc_en.compound,
                            cooking_method_uk:
                                response.data.desc_uk.cooking_method,
                            cooking_method_en:
                                response.data.desc_en.cooking_method,
                            weight_uk: response.data.desc_uk.weight,
                            weight_en: response.data.desc_en.weight,
                            expiration_date_uk:
                                response.data.desc_uk.expiration_date,
                            expiration_date_en:
                                response.data.desc_en.expiration_date,
                            cooking_method_short_uk:
                                response.data.desc_uk.cooking_method_short,
                            cooking_method_short_en:
                                response.data.desc_en.cooking_method_short,
                            per_package: response.data.desc_en.per_package,
                            files: response.data.imgUrls,
                            isAvailable: response.data.isAvailable,
                        });
                    }
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                return error;
            }
        };
        loadOrder();
    }, [categoryOption, lang, productId, token]);

    const handleSubmit = async values => {
        const data = createProductRequestData(values);
        try {
            setIsFetching(true);
            if (token) {
                setAuthHeader(token);
                await upDateProduct(productId, data);
                setIsFetching(false);

                router.push("/dashboard/products");
            }
        } catch (error) {
            setIsFetching(false);

            return error;
        }
    };

    return (
        <>
            <section className={`container section`}>
                <BackButton />
                <h2 className={`title--secondary`}>
                    {dictionary?.UpdateProductPage.title}
                </h2>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className={styles.form__wrapper}>
                        <ProductForm
                            initialValues={initialValues}
                            handleSubmit={handleSubmit}
                            validationSchema={productSchema}
                            isLoading={isFetching}
                            pageName={Constants.productPageName.update}
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default UpdateProductPage;
