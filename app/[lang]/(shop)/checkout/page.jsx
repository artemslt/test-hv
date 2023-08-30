"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../../../hooks/useCart";
import { useDictionary } from "../../../../hooks/useDictionary";
import { clearCart } from "../../../../redux/cart/cartSlice";
import CheckoutCardList from "../../components/CheckOut/CheckoutCardList/CheckoutCardList";
import ContactForm from "../../components/GeneralComponents/ContactForm/ContactForm";
import BackButton from "../../components/GeneralComponents/BackButton/BackButton";
import CheckoutModal from "../../components/CheckOut/CheckoutModal/CheckoutModal";
import Backdrop from "../../components/GeneralComponents/Backdrop/Backdrop";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import NoProducts from "../../components/GeneralComponents/NoProducts/NoProducts";
import Constants from "../../constants/index";
import { contactFormSchema } from "../../../../schemas/contactFormValidationSchema";
import { createOrder, sendOrderToTelegram } from "@/services/api";
import styles from "./checkout.module.scss";

const CheckOutPage = ({ params: { lang } }) => {
    const { cartProducts, isLoading, cartIds } = useCart(lang);
    const [orderItems, setOrderItems] = useState([]);
    const [orderNumber, setOrderNumber] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const dictionary = useDictionary(lang);
    const { contactOptionUk, contactOptionEn } = Constants;
    const [selectedOption, setSelectedOption] = useState(
        contactOptionUk[0].label
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (lang === "en") {
            setSelectedOption(contactOptionEn[0].label);
        }
    }, [lang, setSelectedOption, contactOptionEn]);

    useEffect(() => {
        let order = [];
        for (let i = 0; i < cartProducts?.length; i++) {
            let data = {
                quantity: cartProducts[i].quantity,
                product: cartProducts[i].id,
            };
            order.push(data);
        }
        setOrderItems(order);
    }, [cartProducts, isLoading]);

    const orderConfirmationModal = () => {
        setShowModal(true);
    };

    const initialValues = {
        name: "",
        connection_type:
            lang === "en" ? contactOptionEn[0] : contactOptionUk[0],
        phone: "",
        email: "",
        comments: "",
        accepted_data_collection: "",
    };

    const modalSubmit = async values => {
        const userOrder = {
            orderItems,
            name: values.name,
            connection_type: values.connection_type,
            phone: values.phone,
            email: values.email,
            comments: values.comments,
            accepted_data_collection: values.accepted_data_collection,
        };

        try {
            const data = await createOrder(lang, userOrder);
            setOrderNumber(data.data.order_id);
            sendOrderToTelegram(userOrder, data.data.order_id);

            orderConfirmationModal();
            dispatch(clearCart());
        } catch (error) {
            return error;
        }
    };

    return (
        <section className="container section">
            <BackButton />
            {!isLoading ? (
                <div>
                    <h2 className={`title--secondary`}>
                        {dictionary?.Checkout.title}
                    </h2>
                    {cartProducts && cartIds ? (
                        <div className={styles.wrapper}>
                            <CheckoutCardList
                                cartProducts={cartProducts}
                                dictionary={dictionary}
                                isLoading={isLoading}
                            />
                            <div className={styles.form__wrapper}>
                                <ContactForm
                                    dictionary={dictionary}
                                    connectionType={selectedOption}
                                    initialValues={initialValues}
                                    validationSchema={contactFormSchema}
                                    onSubmit={modalSubmit}
                                    buttonName={dictionary?.buttons.placeOrder}
                                    isChecboxShown={true}
                                />
                            </div>
                        </div>
                    ) : (
                        <NoProducts>{dictionary?.cart.empty}</NoProducts>
                    )}
                </div>
            ) : (
                <Loader />
            )}

            <Backdrop showModal={showModal}>
                {orderNumber ? (
                    <CheckoutModal
                        dictionary={dictionary}
                        orderNumber={orderNumber}
                        setShowModal={setShowModal}
                        showModal={showModal}
                    />
                ) : (
                    <Loader />
                )}
            </Backdrop>
        </section>
    );
};

export default CheckOutPage;
