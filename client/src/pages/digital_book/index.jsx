import BookSlider from "../../components/Slider/BookSlider";
import BookWithFilter from "../../components/BookWithFilter/BookWithFilter";
function DigitalBook() {
    return (
        <div>
            <BookSlider
                title={"Sách điện tử giảm giá"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }}
            />
            <BookSlider
                title={"Sách điện tử hay"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }}
            />
            <BookWithFilter title={"Sách điện tử khác"} />
        </div>
    );
}

export default DigitalBook;
