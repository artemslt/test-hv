import { useState, useEffect } from "react";
import { getDictionary } from "../get-dictionary";

export const useDictionary = lang => {
    const [dictionary, setDictionary] = useState(null);

    useEffect(() => {
        const getDictionaryByLang = async () => {
            try {
                const response = await getDictionary(lang);
                setDictionary(response);
            } catch (error) {
                return error;
            }
        };
        getDictionaryByLang();
    }, [lang]);

    return dictionary;
};
