import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import CategoryResult from "../../components/CategoryResult/CategoryResult";

function BestSeller() {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/book/best_seller")
            .then((result) => {
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);
    return <CategoryResult title={"Sách bán chạy"} data={listBook} />;
}

export default BestSeller;
