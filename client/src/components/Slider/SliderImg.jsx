import Slider from "react-slick";
import "./Slider.scss";

function SliderImg() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <Slider className="slider" {...settings}>
            <img className="slider-img" src="/slider.png" alt="photo" />
            <img className="slider-img" src="/slider_1.png" alt="photo" />
            <img className="slider-img" src="/slider.png" alt="photo" />
            <img className="slider-img" src="/slider_1.png" alt="photo" />
            <img className="slider-img" src="/slider.png" alt="photo" />
            <img className="slider-img" src="/slider_1.png" alt="photo" />
        </Slider>
    );
}

export default SliderImg;
