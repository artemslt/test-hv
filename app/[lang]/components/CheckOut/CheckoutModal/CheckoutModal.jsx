import Link from "next/link";
import styles from "./CheckoutModal.module.scss";
import { useLang } from "@/hooks/useLang";
import "../../../../globals.scss";

const CheckoutModal = ({ dictionary, orderNumber, setShowModal }) => {
    const lang = useLang();

    return (
        <div className="modal">
            <p className={styles.title}>
                {dictionary?.Checkout.thankyouOrder}
            </p>
            <p className={`text ${styles.text}`}>
                {dictionary?.Checkout.orderNumber}
                {orderNumber}
            </p>
            <Link  className={styles.button__wrapper} href={`/${lang}/`}>
                <button className="button" onClick={() => setShowModal(false)}>
                    {dictionary?.Checkout.ok}
                </button>
            </Link>
        </div>
    );
};

export default CheckoutModal;
