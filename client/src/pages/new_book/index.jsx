import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import CategoryResult from "../../components/CategoryResult/CategoryResult";
import { useSelector } from "react-redux";

function New() {
    const [listBook, setListBook] = useState([]);
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        axiosInstance
            .get("/book/new")
            .then((result) => {
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    const dataAfterFilter = listBook.filter(
        (book) =>
            book.rating >= filter.rating &&
            book.price >= filter.price.min &&
            book.price <= filter.price.max
    );

    return <CategoryResult title={"Sách mới"} data={dataAfterFilter} />;
}

export default New;
