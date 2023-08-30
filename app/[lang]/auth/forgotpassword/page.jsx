"use client";
import React, { useState } from "react";
import { useDictionary } from "@/hooks/useDictionary";
import SendEmailForm from "../../dashboardComponents/ForgotPassword/SendEmailForm/SendEmailForm";
import WrongEmailModal from "../../dashboardComponents/ForgotPassword/WrongEmailModal/WrongEmailModal";
import BackButton from "../../components/GeneralComponents/BackButton/BackButton";
import Loader from "../../components/GeneralComponents/Loader/Loader";

const ForgotPasswordPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={`container section`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <BackButton />
                    <h2 className={`title--secondary`}>
                        {dictionary?.forgotPassword.title}
                    </h2>
                    <div className="authForm__wrapper">
                        <SendEmailForm
                            dictionary={dictionary}
                            setShowModal={setShowModal}
                        />
                    </div>
                    <WrongEmailModal
                        dictionary={dictionary}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </>
            )}
        </section>
    );
};

export default ForgotPasswordPage;
