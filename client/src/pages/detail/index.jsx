import BookDetail from "../../components/BookDetail/BookDetail";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
    const url = useLocation();
    const bookId = url.pathname.split("/")[2];
    const bookList = useSelector((state) => state.books.bookList);
    const data = bookList.find((book) => book._id === bookId);

    return (
        <>
            <BookDetail data={data} />
        </>
    );
}

export default Detail;
