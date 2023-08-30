import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../../redux/cart/cartSlice";
import { showNotification } from "../../../../../helpers/showNotification";
import styles from "./AddToCartButton.module.scss";

const AddToCartButton = ({
    dictionary,
    product,
    setIsNotificationShown,
    customStyles,
}) => {
    const { isAvailable } = product;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(product.id));
        showNotification(setIsNotificationShown);
    };

    return (

        <button
            type="button"
            disabled={!isAvailable}
            onClick={addToCart}
            className={`${styles.button} ${customStyles}`}
        >
            {isAvailable
                ? dictionary?.buttons.addToCart
                : dictionary?.buttons.unavailable}
        </button>
    );
};

export default AddToCartButton;
