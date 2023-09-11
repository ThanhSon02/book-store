/* eslint-disable react/prop-types */
import "./CategoryResult.scss";
import BookCard from "../BookCard/BookCard";
import { Pagination } from "antd";
import { useState } from "react";
import Filter from "../Filter/Filter";

function CategoryResult({ title, data = [] }) {
    const itemsPerPage = 8;
    const [pageCount, setPageCount] = useState(1);

    const maxIndex = pageCount * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const total = data.length;
    const newList = data.slice(minIndex, maxIndex);

    const handlePagination = (page) => {
        setPageCount(page);
    };
    return (
        <div className="category-result">
            <div className="catagory-result-top">
                <h2>{title}</h2>
                <div>
                    <Filter />
                </div>
            </div>
            <div className="category-result-main">
                {newList.map((book) => (
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
                ))}
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
