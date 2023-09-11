import { useEffect, useState } from "react";
import CategoryResult from "../../components/CategoryResult/CategoryResult";
import { toast } from "react-toastify";
import axiosInstance from "../../axios/axios";

function Hot() {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/book/hot")
            .then((result) => {
                console.log("data: ", result);
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);
    return <CategoryResult title={"Sách nổi bật"} data={listBook} />;
}

export default Hot;
