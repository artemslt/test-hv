import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {
        addItemToCart(state, action) {
            const index = state?.cart.findIndex(
                item => item.id === action.payload
            );
            if (index !== -1) {
                state.cart[index].quantity = state.cart[index].quantity + 1;
                return state;
            }
            state.cart.push({ quantity: 1, id: action.payload });
            return state;
        },
        changeCartQuantity(state, action) {
            const index = state?.cart.findIndex(
                item => item.id === action.payload.id
            );
            if (action.payload.quantity !== 0) {
                state.cart[index].quantity = Number(action.payload.quantity);
                return state;
            }
            state.cart.splice(index, 1);
            return state;
        },
        removeItemFromCart(state, action) {
            const index = state?.cart.findIndex(
                item => item.id === action.payload
            );
            state.cart.splice(index, 1);
            return state;
        },
        clearCart(state, _) {
            state.cart = [];
            return state;
        },
    },
});

export const {
    addItemToCart,
    changeCartQuantity,
    removeItemFromCart,
    clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
