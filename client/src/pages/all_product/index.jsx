import { useEffect } from "react";
import CategoryResult from "../../components/CategoryResult/CategoryResult";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook } from "../../service/bookService";
import { Spin } from "antd";

function All() {
    const bookList = useSelector((state) => state.books.bookList);
    const isLoading = useSelector((state) => state.books.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBook());
    }, []);

    return (
        <>
            {isLoading ? (
                <div
                    style={{
                        width: "100%",
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <Spin size="large" />
                </div>
            ) : (
                <CategoryResult title={"Tất cả sản phẩm"} data={bookList} />
            )}
        </>
    );
}

export default All;
