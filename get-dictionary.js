import { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting

const dictionaries = {
    uk: () => import("./dictionaries/uk.json").then(module => module.default),
    en: () => import("./dictionaries/en.json").then(module => module.default),
};

export const getDictionary = async locale =>
    locale === "uk" ? dictionaries.uk() : dictionaries.en();
