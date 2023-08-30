import axios from "axios";

axios.defaults.baseURL = "https://hive-lubv.onrender.com/";

//AUTH HEADER

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

//PRODUCTS

export const fetchProducts = async lang => {
    try {
        const response = await axios.get(`products?lang=${lang}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchProductsByCategory = async (category, lang, limit) => {
    try {
        const response = await axios.get(
            `products/category/${category}?lang=${lang}&limit=${limit}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchOneProductById = async (lang, id) => {
    try {
        const response = await axios.get(`products/catalog/${id}?lang=${lang}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchProductsByIds = async (lang, ids) => {
    try {
        const response = await axios.get(
            `products/multiple?lang=${lang}&ids=${ids}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchProductsByName = async (lang, search) => {
    try {
        const response = await axios.get(
            `products/search?lang=${lang}&search=${search}`
        );
        return response;
    } catch (error) {
        return error;
    }
};

export const fetchSimilarProducts = async (lang, category) => {
    try {
        const response = await axios.get(
            `/products/category/${category}?lang=${lang}`
        );
        return response;
    } catch (error) {
        return error;
    }
};

export const fetchProductsInStock = async lang => {
    try {
        const response = await axios.get(`/products/stock?lang=${lang}`);
        return response.data;
    } catch (error) {
        return error;
    }
};
export const createProduct = async data => {
    try {
        const response = await axios.post("/products", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};
export const upDateProduct = async (id, data) => {
    try {
        const response = await axios.patch(`/products/catalog/${id}`, data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

export const deleteProduct = async id => {
    try {
        const response = await axios.delete(`/products/catalog/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// bank info for charity page
export const fetchBankDetails = async () => {
    try {
        const response = await axios.get("info");
        return response.data;
    } catch (error) {
        return error;
    }
};

export const updateBankDetails = async (data, id) => {
    try {
        const response = await axios.patch(`info/${id}`, data);
        return response.data;
    } catch (error) {
        return error;
    }
};

//ORDERS

export const createOrder = async (lang, data) => {
    try {
        const response = await axios.post(`orders?lang=${lang}`, data);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchOrders = async (lang, currentPage, status) => {
    try {
        const response = await axios.get(
            `orders?lang=${lang}&page=${currentPage}&status=${status}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchOrderById = async (id, lang) => {
    try {
        const response = await axios.get(`orders/order/${id}?lang=${lang}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchOrderByNumber = async (number, lang) => {
    try {
        const response = await axios.get(
            `orders/search/${number}?lang=${lang}`
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const changeOrder = async (orderId, lang, data) => {
    try {
        const response = await axios.patch(
            `orders/order/${orderId}?lang=${lang}`,
            data
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

//AUTHENTICATION

export const login = async credentials => {
    try {
        const response = await axios.post("dashboard/login", credentials);
        return response.data.data;
    } catch (error) {
        return error;
    }
};

export const requestResetPassword = async (credentials, lang) => {
    try {
        const response = await axios.patch(
            `dashboard/resetpassword?lang=${lang}`,
            credentials
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const resetPassword = async credentials => {
    try {
        const response = await axios.patch(
            `dashboard/newpassword`,
            credentials
        );
        return response;
    } catch (error) {
        return error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`dashboard/logout`);
        return response;
    } catch (error) {
        return error;
    }
};

export const sendOrderToTelegram = (data, orderNumber) => {
    const URL_API = process.env.NEXT_PUBLIC_TELEGRAM_URL_API;

    let message = `<b>Нове замовлення</b>\n`;
    message +=
        `Номер замовлення: ${orderNumber}\n` +
        `Ім'я: ${data.name}\n` +
        `Як звя'затись: ${data.connection_type}\n` +
        `Телефон: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Коментарі: ${data.comments}\n`;

    try {
        axios.post(URL_API, {
            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
            parse_mode: "html",
            text: message,
        });
    } catch (error) {
        return error;
    }
};

export const sendCallBackToTelegram = customer => {
    let message = `<b>Передзвоніть мені</b>\n`;
    message += `Ім'я: ${customer.name}\n` + `Телефон: ${customer.phone}\n`;

    const URL_API = process.env.NEXT_PUBLIC_TELEGRAM_URL_API;

    try {
        axios.post(URL_API, {
            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
            parse_mode: "html",
            text: message,
        });
    } catch (error) {
        return error;
    }
};
