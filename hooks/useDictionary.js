import { useState, useEffect } from "react";
import { getDictionary } from "../get-dictionary";

export const useDictionary = lang => {
    const [dictionary, setDictionary] = useState(null);
    console.log("dictionary :>> ", dictionary);
    useEffect(() => {
        const getDictionaryByLang = async () => {
            try {
                const response = await getDictionary(lang);
                setDictionary(response);
                console.log("is here :>> ", "badddd");
            } catch (error) {
                return error;
            }
        };
        getDictionaryByLang();
    }, [lang]);

    return dictionary;
};
