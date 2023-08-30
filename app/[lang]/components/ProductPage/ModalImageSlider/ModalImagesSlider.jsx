import Slider from "react-slick";
import Image from "next/image";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import styles from "./ModalImagesSlider.module.scss";
import { onButtonCloseModal } from "@/helpers/onButtonCloseModal";
import CrossButton from "../../GeneralComponents/CrossButton/CrossButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ModalImagesSliderStyles.scss";

const ModalImagesSlider = ({ product, setLocalShowModal }) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            type="button"
        ></button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            type="button"
        ></button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
    };

    return (
        <div className={styles.modal}>
            <div className={styles.slider__wrapper}>
                <CrossButton
                    onClick={() => onButtonCloseModal(setLocalShowModal)}
                    styles__button={styles.button__close}
                />

                {product.urls.length ? (
                    <Slider {...settings} className="modal-slider">
                        {product.urls.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={product.desc.title}
                                    width={"100%"}
                                    height={"100%"}
                                    className={styles.slider__image}
                                />
                            );
                        })}
                    </Slider>
                ) : (
                    <div className={styles.slider__image}>
                        <Image
                            src={AltImage}
                            alt={product.desc.title}
                            fill
                            className={styles.slider__image}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalImagesSlider;
