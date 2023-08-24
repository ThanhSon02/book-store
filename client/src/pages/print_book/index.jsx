import BookWithFilter from "../../components/BookWithFilter/BookWithFilter";
import Catalog from "../../components/Catalog/Catalog";
import BookSlider from "../../components/Slider/BookSlider";

function PrintBook() {
    return (
        <div>
            <Catalog />
            <BookSlider
                title={"Sách giảm giá"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }}
            />
            <BookSlider
                title={"Sách đọc nhiều"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    arrows: false,
                }}
            />
            <BookWithFilter title={"Sách hay"} />
        </div>
    );
}

export default PrintBook;
