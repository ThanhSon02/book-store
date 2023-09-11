import Slider from "react-slick";
import "./Slider.scss";

function SliderImg() {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div>
            <Slider className="slider" {...settings}>
                <img className="slider-img" src="/2419_new.png" alt="photo" />
                <img className="slider-img" src="/2512_new.png" alt="photo" />
                <img className="slider-img" src="/2518_new.png" alt="photo" />
                <img className="slider-img" src="/2533_new.png" alt="photo" />
            </Slider>
        </div>
    );
}

export default SliderImg;
