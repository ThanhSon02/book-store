import { useEffect, useState } from "react";
import CategoryResult from "../../components/CategoryResult/CategoryResult";
import axiosInstance from "../../axios/axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function CategoryPage() {
    const url = useLocation();
    const [listBook, setListBook] = useState([]);
    const categoryType = url.pathname.split("/")[2];
    const getTitle = () => {
        let title;
        switch (categoryType) {
            case "economy":
                title = "Kinh tế";
                break;
            case "science":
                title = "Khoa học";
                break;
            case "politics-history":
                title = "Chính trị - Lịch sử";
                break;
            case "horror-detective":
                title = "Kinh dị - Trinh thám";
                break;
            case "literature-novels":
                title = "Văn học - Tiểu thuyết";
                break;
            case "living-skill":
                title = "Kĩ năng sống";
                break;
        }
        return title;
    };
    useEffect(() => {
        axiosInstance
            .get(`/book/category/${categoryType}`)
            .then((result) => {
                setListBook(result.data.listBook);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);
    return <CategoryResult title={getTitle()} data={listBook} />;
}

export default CategoryPage;
