import { useEffect, useState } from "react";
import BookSlider from "../../components/Slider/BookSlider";
import SliderImg from "../../components/Slider/SliderImg";
import axiosInstance from "../../axios/axios";

function HomePage() {
    const [hotBook, setHotBook] = useState([]);
    const [bestSellerBook, setBestSellerBook] = useState([]);
    const [newBook, setNewBook] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/book/hot")
            .then((result) => {
                setHotBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    useEffect(() => {
        axiosInstance
            .get("/book/best_seller")
            .then((result) => {
                setBestSellerBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    useEffect(() => {
        axiosInstance
            .get("/book/new")
            .then((result) => {
                setNewBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    return (
        <>
            <SliderImg />
            <BookSlider
                title={"Sách mới nhất"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    arrows: true,
                }}
                href={"/new"}
                data={newBook}
            />
            <BookSlider
                title={"Sách hot"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    arrows: true,
                }}
                href={"/hot_book"}
                data={hotBook}
            />
            <BookSlider
                title={"Sách bán chạy nhất"}
                configs={{
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    arrows: true,
                }}
                href={"/hot_book"}
                data={bestSellerBook}
            />
        </>
    );
}

export default HomePage;
