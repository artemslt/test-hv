import Slider from "react-slick";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import Constants from "../../../constants/index";
import SliderArrow from "./SliderArrow";
import { useScreenSize } from "@/hooks/useScreenSize";
import styles from "./ProductCardsSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const ProductCardsSlider = ({
    title,
    products,
    isLoading,
    setIsNotificationShown,
    dictionary,
}) => {
    const screenSizeName = useScreenSize();
    const { desktopSlides, tabletSlides, mobileSlides } =
        Constants.slidesToShow;
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: desktopSlides,
        slidesToScroll: 2,
        nextArrow: <SliderArrow styles_arrow={styles.nextArrow} />,
        prevArrow: <SliderArrow styles_arrow={styles.prevArrow} />,
        responsive: [
            {
                breakpoint: Constants.screenSizes.desktop - 1,
                settings: {
                    slidesToShow: tabletSlides,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: Constants.screenSizes.tablet - 1,
                settings: {
                    slidesToShow: mobileSlides,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={styles.slider}>
            <h3 className={`${styles.slider__title} title--third`}>{title}</h3>
            {isLoading && <Loader />}
            {products && (
                <div className={styles.slider__wrapper}>
                    {(products.length >= desktopSlides &&
                        screenSizeName === "desktop") ||
                    (products.length >= tabletSlides &&
                        screenSizeName === "tablet") ||
                    (products.length >= mobileSlides &&
                        screenSizeName === "mobile") ? (
                        <Slider {...settings}>
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    dictionary={dictionary}
                                    setIsNotificationShown={
                                        setIsNotificationShown
                                    }
                                />
                            ))}
                        </Slider>
                    ) : (
                        <div className={styles.without__slider}>
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    dictionary={dictionary}
                                    setIsNotificationShown={
                                        setIsNotificationShown
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductCardsSlider;
