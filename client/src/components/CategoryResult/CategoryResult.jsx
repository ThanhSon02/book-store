/* eslint-disable react/prop-types */
import "./CategoryResult.scss";
import BookCard from "../BookCard/BookCard";
import { Button, Pagination } from "antd";
import { useState } from "react";
import Filter from "../Filter/Filter";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../redux/Slice/filterSlice";

function CategoryResult({ title, data = [] }) {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    // Paginate
    const itemsPerPage = 8;
    const [pageCount, setPageCount] = useState(1);
    const maxIndex = pageCount * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const total = data.length;
    const newList = data.slice(minIndex, maxIndex);

    const handlePagination = (page) => {
        setPageCount(page);
    };
    // paginate end

    return (
        <div className="category-result">
            <div className="catagory-result-top">
                <h2>{title}</h2>
                <div className="catagory-result-top-btn">
                    {filter.isActive ? (
                        <Button onClick={() => dispatch(resetFilter())}>
                            <CloseOutlined />
                        </Button>
                    ) : (
                        <></>
                    )}
                    <div>
                        <Filter />
                    </div>
                </div>
            </div>
            <div className="category-result-main">
                {newList.length > 0 ? (
                    newList.map((book) => (
                        <BookCard
                            className="book-item"
                            key={book._id}
                            bookID={book._id}
                            bookTitle={book.book_name}
                            bookAuthor={book.author}
                            bookDesc={book.description}
                            bookImg={book.book_img}
                            bookRating={book.rating}
                            bookPrice={book.price}
                        />
                    ))
                ) : (
                    <div className="empty">
                        <span>Không có sản phẩm nào!</span>
                    </div>
                )}
            </div>
            <Pagination
                className="pagination"
                defaultCurrent={pageCount}
                onChange={handlePagination}
                total={total}
            />
        </div>
    );
}

export default CategoryResult;
