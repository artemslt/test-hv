import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cart/cartSelectors";
import { fetchProductsByIds } from "../services/api";

export const useCart = lang => {
    const [products, setProducts] = useState(null);
    const [cartProducts, setCartProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const cart = useSelector(selectCart);
    const cartIds = cart.map(item => item.id).toString();

    useEffect(() => {
        const loadCartProducts = async () => {
            setIsLoading(true);
            try {
                const response = await fetchProductsByIds(lang, cartIds);
                setProducts(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                return error;
            }
        };
        cartIds.length > 0 && loadCartProducts();
    }, [lang, cartIds]);

    useEffect(() => {
        const cartItems = products?.flatMap(product => [
            {
                ...product,
                ...cart.filter(cartItem => product.id === cartItem.id)[0],
            },
        ]);
        setCartProducts(cartItems);
    }, [cart, products]);
    return { cartProducts, isLoading, cartIds };
};
