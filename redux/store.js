import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { cartReducer } from "./cart/cartSlice";


const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const isServer = typeof window === "undefined";

const storage = isServer ? createNoopStorage() : createWebStorage("local");

const cartPersistConfig = {
    key: "cart",
    storage,
};


const rootReducer = combineReducers({
    cart: persistReducer(cartPersistConfig, cartReducer),
    
});

export const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
    devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
