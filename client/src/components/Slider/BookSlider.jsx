import { Link } from "react-router-dom";
import "./Slider.scss";
import Slider from "react-slick";
import BookCart from "../BookCard/BookCard";

const listBooks = [
    {
        id: 1,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 2,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 3,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 4,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 5,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 6,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 7,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 8,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 9,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 10,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 11,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 12,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
];

// eslint-disable-next-line react/prop-types
function BookSlider({ title, configs }) {
    return (
        <div className="book-slider">
            <h1 className="title">{title}</h1>
            <Slider {...configs}>
                {listBooks.map((item) => (
                    <BookCart
                        bookId={item.id}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        author={item.author}
                        currentRating={item.rating}
                        price={item.price}
                    />
                ))}
            </Slider>
            <Link to={"/book"} className="booklist-link">
                Xem tất cả
            </Link>
        </div>
    );
}

export default BookSlider;
