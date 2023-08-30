"use client";
import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import { fetchBankDetails } from "@/services/api";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import BankDetailsForm from "../../dashboardComponents/BankDetailsForms/Form/BankDetailsForm";
import {
    bankDetailsIbanSchema,
    bankDetailsCardNumberSchema,
    bankDetailsPayPalSchema,
    monoBankDetailsSchema,
} from "../../../../schemas/bankDetailsValidationSchema";
import styles from "../../dashboardComponents/BankDetailsForms/Form/BankDetailsForm.module.scss";

const ChangeBankDetails = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const [bankDetails, setBankDetails] = useState([]);

    const loadBankDetails = async () => {
        try {
            const response = await fetchBankDetails();
            if (response?.success) {
                setBankDetails(response.data);
            }
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        loadBankDetails();
    }, []);

    const BankOptions = [
        {
            name: "iban",
            value: bankDetails[0],
            description: dictionary?.bankDetailsPage.accountNumber,
            isShowMask: true,
            validationSchema: bankDetailsIbanSchema,
            mask: "UA999999999999999999999999999",
            typeOfMask: InputMask,
            inputStyles: `input ${styles.iban__input}`,
        },

        {
            name: "privatBank",
            value: bankDetails[1],
            description: dictionary?.bankDetailsPage.cardNumber,
            isShowMask: true,
            validationSchema: bankDetailsCardNumberSchema,
            mask: "9999 9999 9999 9999",
            typeOfMask: InputMask,
            inputStyles: "input",
        },

        {
            name: "monobank",
            value: bankDetails[2],
            description: dictionary?.bankDetailsPage.cardNumber,
            isShowMask: true,
            validationSchema: bankDetailsCardNumberSchema,
            mask: "9999 9999 9999 9999",
            typeOfMask: InputMask,
            inputStyles: "input",
        },
        {
            name: "monoLink",
            value: bankDetails[3],
            description: dictionary?.bankDetailsPage.monobankLink,
            isShowMask: true,
            validationSchema: monoBankDetailsSchema,
            mask: "",
            typeOfMask: "textarea",
            inputStyles: styles.monoLink,
        },

        {
            name: "payPal",
            description: dictionary?.bankDetailsPage.payPalNumber,
            value: bankDetails[4],
            isShowMask: false,
            validationSchema: bankDetailsPayPalSchema,
            mask: "",
            typeOfMask: "",
            inputStyles: "input",
        },
    ];

    return (
        <section className="container section">
            <h2 className="title--secondary">
                {dictionary?.bankDetailsPage.title}
            </h2>

            {bankDetails.length > 0 ? (
                <>
                    {BankOptions.map((option, index) => (
                        <BankDetailsForm
                            key={index}
                            bankDetails={option.value}
                            description={option.description}
                            isShowMask={option.isShowMask}
                            validationSchema={option.validationSchema}
                            mask={option.mask}
                            typeOfMask={option.typeOfMask}
                            inputStyles={option.inputStyles}
                        />
                    ))}
                </>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default ChangeBankDetails;
