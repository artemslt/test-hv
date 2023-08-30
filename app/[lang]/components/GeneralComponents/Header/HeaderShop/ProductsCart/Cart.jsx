import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { useSelector } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import { selectCart } from "@/redux/cart/cartSelectors";
import styles from "./Cart.module.scss";

const Cart = () => {
    const lang = useLang();
    const cart = useSelector(selectCart);

    return (
        <Link href={`/${lang}/cart`} className={styles.cart}>
            <CartIcon />
            {cart.length > 0 && (
                <div className={styles.inCart}>{cart.length}</div>
            )}
        </Link>
    );
};

export default Cart;
