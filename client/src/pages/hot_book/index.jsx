import { useEffect, useState } from "react";
import CategoryResult from "../../components/CategoryResult/CategoryResult";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axios";
import { useSelector } from "react-redux";

function Hot() {
    const [listBook, setListBook] = useState([]);
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        axiosInstance
            .get("/book/hot")
            .then((result) => {
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);

    const dataAfterFilter = listBook.filter(
        (book) =>
            book.rating >= filter.rating &&
            book.price >= filter.price.min &&
            book.price <= filter.price.max
    );
    return <CategoryResult title={"Sách nổi bật"} data={dataAfterFilter} />;
}

export default Hot;
