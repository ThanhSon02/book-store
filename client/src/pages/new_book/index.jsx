import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import CategoryResult from "../../components/CategoryResult/CategoryResult";

function New() {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/book/new")
            .then((result) => {
                console.log("data: ", result);
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);
    return <CategoryResult title={"Sách mới"} data={listBook} />;
}

export default New;
