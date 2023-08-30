const Constants = {
    contactOptionUk: [
        { value: "call", label: "Дзвінок" },
        { value: "sms", label: "SMS на мобільний" },
        { value: "signal", label: "Signal" },
        { value: "telegram", label: "Telegram" },
        { value: "whatsapp", label: "WhatsApp" },
        { value: "viber", label: "Viber" },
    ],
    contactOptionEn: [
        { value: "call", label: "Confirmation call" },
        { value: "sms", label: "SMS confirmation" },
        { value: "signal", label: "Signal" },
        { value: "telegram", label: "Telegram" },
        { value: "whatsapp", label: "WhatsApp" },
        { value: "viber", label: "Viber" },
    ],

    categoryOption: {
        uk: [
            { value: "breakfasts", label: "Сніданки" },
            { value: "mainDishes", label: "Основні страви" },
            { value: "soups", label: "Супи" },
            { value: "snacksAndDrinks", label: "Снеки та напої" },
        ],
        en: [
            { value: "breakfasts", label: "Breakfasts" },
            { value: "mainDishes", label: "Main courses" },
            { value: "soups", label: "Soups" },
            { value: "snacksAndDrinks", label: "Snacks and beverages" },
        ],
    },

    placeholders: {
        en: { value: "choose", label: "Choose category" },
        uk: { value: "choose", label: "Оберіть категорію" },
    },
    orderStatusUk: [
        { id: "1", value: "", label: "Всі" },
        { id: "2", value: "new", label: "Нове" },
        { id: "3", value: "processing", label: "В роботі" },
        { id: "4", value: "completed", label: "Виконано" },
        { id: "5", value: "cancelled", label: "Скасовано" },
    ],
    orderStatusEn: [
        { id: "1", value: "", label: "All" },
        { id: "2", value: "new", label: "New" },
        { id: "3", value: "processing", label: "Processing" },
        { id: "4", value: "completed", label: "Completed" },
        { id: "5", value: "cancelled", label: "Cancelled" },
    ],

    chooseProductUk: { value: "", label: "Оберіть товар" },
    chooseProductEn: { value: "", label: "Choose product" },

    statusUk: [
        { value: "new", label: "Нове" },
        { value: "processing", label: "В роботі" },
        { value: "completed", label: "Виконано" },
        { value: "cancelled", label: "Скасовано" },
    ],
    statusEn: [
        { value: "new", label: "New" },
        { value: "processing", label: "Processing" },
        { value: "completed", label: "Completed" },
        { value: "cancelled", label: "Cancelled" },
    ],

    debounce: 1000,
    number: "№",
    setTimeout: 2000,

    screenSizes: {
        mobile: 320,
        tablet: 768,
        desktop: 1280,
    },

    screenSizeName: {
        mobileName: "mobile",
        tabletName: "tablet",
        desktopName: "desktop",
    },
    slidesToShow: {
        desktopSlides: 5,
        tabletSlides: 3,
        mobileSlides: 2,
    },

    socialMediaLinks: {
        facebook: "https://www.facebook.com/groups/1335405210619822",
        instagram: "https://www.instagram.com/kuharskyi_vulyk",
    },

    telNumber: "380 509393033",
    email: "kuharskiyvulyk@gmail.com",

    colors: {
        colorBlack: "#2B2B2B",
        colorLightGrey: "#eae9e9",
        errorColor: "#C25454",
        borderColor: "#AAA8A4",
    },

    productPageName: {
        add: "AddProductPage",
        update: "UpdateProductPage",
    },

    catalogProductsQuantity: {
        mobileQuantity: 4,
        tabletQuantity: 3,
        desktopQuantity: 5,
    },

    productPageImageSizes: {
        mobile: {
            width: 304,
            height: 288,
        },
        tablet: {
            width: 344,
            height: 344,
        },
        desktop: {
            width: 493,
            height: 501,
        },
    },

    categoryLink: {
        uk: [
            { value: "breakfasts", label: "Сніданки" },
            { value: "mainDishes", label: "Основні страви" },
            { value: "soups", label: "Супи" },
            { value: "snacksDrinks", label: "Снеки та напої" },
        ],
        en: [
            { value: "breakfasts", label: "Breakfasts" },
            { value: "mainDishes", label: "Main courses" },
            { value: "soups", label: "Soups" },
            { value: "snacksDrinks", label: "Snacks & beverages" },
        ],
    },

    slidesToShow: {
        desktopSlides: 5,
        tabletSlides: 3,
        mobileSlides: 2,
    },
    projectManager: [
        {
            name_uk: "Наталія Рубцова",
            name_en: "Nataliia Rubtsova",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Rubtsova_desktop_2x_nbqenx.jpg",
            linkedin: "https://www.linkedin.com/in/nataliia-rubtsova-3ab90a250",
            telegram: "https://t.me/yami_tasha",
        },
    ],
    assistant: [
        {
            name_uk: "Анна Волошина",
            name_en: "Anna Voloshyna",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Voloshyna_desktop_2x_kbvzg0.jpg",
            linkedin: "https://www.linkedin.com/in/ann-voloshyna/",
            telegram: "https://t.me/ann_voloshyna ",
        },
    ],
    webDesigners: [
        {
            name_uk: "Марія Деомідова",
            name_en: "Mariia Deomidova",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Deomidova_desktop_2x_fcmplq.jpg",
            linkedin: "https://www.linkedin.com/in/mariia-deomidova-351762245/",
            telegram: "https://t.me/mariia_deomidova",
            behance: "https://www.behance.net/mariiadeomidova",
        },
        {
            name_uk: "Анастасія Гордієнко",
            name_en: "Anastasiia Hordiienko",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Hordiienko_desktop_2x_nhl76b.jpg",
            linkedin: "https://www.linkedin.com/in/anastasiiahordiienkowork/",
            telegram: "https://t.me/anastasiiahordiienko",
            behance: "https://www.behance.net/anastasiiahordiienko",
        },
    ],
    testers: [
        {
            name_uk: "Євген Лєфтєр",
            name_en: "Yevhen Lieftier",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Lieftier_desktop_2x_esix1a.jpg",
            linkedin: "https://www.linkedin.com/in/evgen-lefter-23b84925a/",
            telegram: "https://t.me/EvgenLefter",
        },
        {
            name_uk: "Олена Коваленко",
            name_en: "Olena Kovalenko",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Kovalenko_desktop_2x_wos2nf.jpg",
            linkedin: "https://www.linkedin.com/in/olena-kovalenko-a4a643267/",
            telegram: "https://t.me/ElenaKovalenko0711",
        },
        {
            name_uk: "Наталя Кондрашина",
            name_en: "Natalia Kondrashyna",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Kondrashyna_desktop_2x_ohrtu9.jpg",
            linkedin: "https://www.linkedin.com/in/natalia-kondrashyna/",
            telegram: "https://t.me/Nataly_Kondrashyna",
        },
    ],
    developers: [
        {
            name_uk: "Ольга Михайлова",
            name_en: "Olga Mykhailova",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Mykhailova_desktop_2x_c2bkmh.jpg",
            linkedin: "https://www.linkedin.com/in/olgamykhailova/",
            telegram: "https://t.me/Olya_Kaktusya",
            github: "https://github.com/OlgaMykhailova",
        },
        {
            name_uk: "Артем Слатін",
            name_en: "Artem Slatin",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Slatin_desktop_2x_elk5pe.jpg",
            linkedin: "https://www.linkedin.com/in/artemslatin/",
            telegram: "https://t.me/Teamslt",
            github: "https://github.com/artemslt",
        },
        {
            name_uk: "Анна Кучеренко",
            name_en: "Anna Kucherenko",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Kucherenko_desktop_2x_vfqy1t.jpg",
            linkedin: "https://www.linkedin.com/in/anna-kucherenko-7b0644235/",
            github: "https://github.com/AnnaKucherenko",
        },
        {
            name_uk: "Олена Постернак",
            name_en: "Olena Posternak",
            photo: "https://res.cloudinary.com/dryhnlf4u/image/upload/v1693237547/team/Posternak_desktop_2x_gvdsnc.jpg",
            linkedin: "https://www.linkedin.com/in/posternak-olena/",
            telegram: "https://t.me/Posternak_Alena",
            github: "https://github.com/OlenaPosternak",
        },
    ],
    monobankLink: "https://send.monobank.ua/",
    junfolioLink: "https://www.linkedin.com/company/junfolio/",
};

export default Constants;
