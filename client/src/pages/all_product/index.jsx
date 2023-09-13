import CategoryResult from "../../components/CategoryResult/CategoryResult";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function All() {
    const bookList = useSelector((state) => state.books.bookList);
    const isLoading = useSelector((state) => state.books.isLoading);
    // const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const dataAfterFilter = bookList.filter(
        (book) =>
            book.rating >= filter.rating &&
            book.price >= filter.price.min &&
            book.price <= filter.price.max
    );

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
                <CategoryResult
                    title={"Tất cả sản phẩm"}
                    data={dataAfterFilter}
                />
            )}
        </>
    );
}

export default All;
