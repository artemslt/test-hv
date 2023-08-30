import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import SelectInput from "@/app/[lang]/components/GeneralComponents/SelectInput/SelectInput";
import Dropzone from "../Dropezone/Dropezone";
import Constants from "@/app/[lang]/constants";
import styles from "./ProductForm.module.scss";
import { useRouter } from "next/navigation";

const ProductForm = ({
    initialValues,
    handleSubmit,
    validationSchema,
    isLoading,
    pageName,
}) => {
    const lang = useLang();
    const router = useRouter();
    const dictionary = useDictionary(lang);
    const { categoryOption } = Constants;
    const [selectedOption, setSelectedOption] = useState({});
    const [options, setOptions] = useState(categoryOption.uk);

    useEffect(() => {
        if (lang === "en") {
            setOptions(categoryOption.en);
        }
    }, [lang, categoryOption]);

    useEffect(() => {
        setSelectedOption(initialValues.category);
    }, [initialValues]);

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={handleSubmit}
            validationSchema={() => validationSchema(dictionary)}
        >
            {({ errors, touched, isValid, dirty, setFieldValue }) => (
                <Form>
                    <div className={styles.form}>
                        <div className={styles.inputs__colomn}>
                            <label>
                                <p className="label">
                                    {dictionary?.AddProductPage.category}
                                </p>
                                <SelectInput
                                    selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption}
                                    options={options}
                                    setFieldValue={setFieldValue}
                                    fieldName="category"
                                />
                            </label>
                            <label className={styles.desktop__block}>
                                <p className="label">
                                    {dictionary?.AddProductPage.perPackage}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input  ${
                                            errors.per_package &&
                                            touched.per_package &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="per_package"
                                        placeholder=""
                                    />
                                    <ErrorMessage
                                        name="per_package"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </label>
                        </div>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.name}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.name}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input  ${
                                            errors.title_uk &&
                                            touched.title_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="title_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="title_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input ${
                                            errors.title_en &&
                                            touched.title_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="title_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="title_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.desc}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.desc}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea  ${
                                            errors.description_uk &&
                                            touched.description_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="description_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="description_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea ${
                                            errors.description_en &&
                                            touched.description_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="description_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="description_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.compound}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.compound}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea  ${
                                            errors.compound_uk &&
                                            touched.compound_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="compound_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="compound_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea ${
                                            errors.compound_en &&
                                            touched.compound_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="compound_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="compound_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.method}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.method}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea  ${
                                            errors.cooking_method_uk &&
                                            touched.cooking_method_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="cooking_method_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="cooking_method_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        component="textarea"
                                        className={`textarea ${
                                            errors.cooking_method_en &&
                                            touched.cooking_method_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="cooking_method_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="cooking_method_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.methodShort}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.methodShort}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input  ${
                                            errors.cooking_method_short_uk &&
                                            touched.cooking_method_short_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="cooking_method_short_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="cooking_method_short_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input ${
                                            errors.cooking_method_short_en &&
                                            touched.cooking_method_short_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="cooking_method_short_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="cooking_method_short_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label className={styles.desktop__none}>
                            <p className="label">
                                {dictionary?.AddProductPage.perPackage}
                            </p>
                            <div className={styles.error__wrapper}>
                                <Field
                                    className={`input  ${
                                        errors.per_package &&
                                        touched.per_package &&
                                        !isValid &&
                                        `input--error`
                                    }`}
                                    name="per_package"
                                    placeholder=""
                                />
                                <ErrorMessage
                                    name="per_package"
                                    component="div"
                                    className={`error__message ${styles.error}`}
                                />
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__colomn}>
                                <p className="label">
                                    {dictionary?.AddProductPage.expirationDate}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.expirationDate}
                                </p>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input  ${
                                            errors.expiration_date_uk &&
                                            touched.expiration_date_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="expiration_date_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="expiration_date_uk"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input ${
                                            errors.expiration_date_en &&
                                            touched.expiration_date_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="expiration_date_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="expiration_date_en"
                                        component="div"
                                        className={`error__message ${styles.error}`}
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <div className={styles.inputs__inline}>
                                <p className="label">
                                    {dictionary?.AddProductPage.weight}
                                </p>
                                <p className={`label ${styles.desktop__block}`}>
                                    {dictionary?.AddProductPage.weight}
                                </p>
                            </div>
                            <div className={styles.inputs__inline}>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input  ${
                                            errors.weight_uk &&
                                            touched.weight_uk &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="weight_uk"
                                        placeholder="Укр"
                                    />
                                    <ErrorMessage
                                        name="weight_uk"
                                        component="div"
                                        className="error__message"
                                    />
                                </div>
                                <div className={styles.error__wrapper}>
                                    <Field
                                        className={`input ${
                                            errors.weight_en &&
                                            touched.weight_en &&
                                            !isValid &&
                                            `input--error`
                                        }`}
                                        name="weight_en"
                                        placeholder="Eng"
                                    />
                                    <ErrorMessage
                                        name="weight_en"
                                        component="div"
                                        className="error__message"
                                    />
                                </div>
                            </div>
                        </label>
                        <label>
                            <p className="label">
                                {dictionary?.AddProductPage.photo}
                            </p>
                            <Dropzone
                                setFieldValue={setFieldValue}
                                imageUrls={initialValues.files}
                            />
                        </label>
                        <label className={styles.label__wrapper}>
                            <Field
                                type="checkbox"
                                name="isAvailable"
                                className={`visually-hidden form__checkbox`}
                            />
                            <div className="checkbox"></div>
                            <p>{dictionary?.AddProductPage.inStock}</p>
                        </label>
                        <button
                            className={`button ${styles.form__button}`}
                            type="submit"
                            disabled={isLoading || !isValid || !dirty}
                        >
                            {dictionary?.[pageName].button}

                            {isLoading && (
                                <div className="spinner--white"></div>
                            )}
                        </button>
                        {pageName === "UpdateProductPage" && (
                            <button
                                className=" button__text"
                                type="button"
                                onClick={() => router.back()}
                            >
                                {dictionary?.buttons.cancel}
                            </button>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProductForm;
