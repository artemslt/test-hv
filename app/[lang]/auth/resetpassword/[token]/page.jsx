"use client";
import React, { useState } from "react";
import { useDictionary } from "@/hooks/useDictionary";
import ResetPasswordForm from "../../../dashboardComponents/ResetPassword/ResetPasswordForm/ResetPasswordForm";
import PasswordSavedModal from "../../../dashboardComponents/ResetPassword/PasswordSavedModal/PasswordSavedModal";
import Loader from "@/app/[lang]/components/GeneralComponents/Loader/Loader";

const ResetPasswordPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={`container section`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <h2 className={`title--secondary`}>
                        {dictionary?.resetPassword.title}
                    </h2>
                    <div className="authForm__wrapper">
                        <ResetPasswordForm
                            dictionary={dictionary}
                            setShowModal={setShowModal}
                        />
                    </div>
                    <PasswordSavedModal
                        dictionary={dictionary}
                        showModal={showModal}
                    />
                </>
            )}
        </section>
    );
};

export default ResetPasswordPage;
