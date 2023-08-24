import "./BookWithFilter.scss";
import { AiOutlineSearch } from "react-icons/ai";
import BookCart from "../BookCard/BookCard";
import { Pagination } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const listBooks = [
    {
        id: 0,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 1,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 2,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 3,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 4,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 5,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 6,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 7,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 8,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 9,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 10,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 11,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 12,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 13,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 14,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 15,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 16,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 17,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 18,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 2",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 19,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen fnsd",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
    {
        id: 20,
        img: "/book1.jpeg",
        title: "Hoa tuylip đen 3",
        author: "Alexandre Dumas",
        rating: 3,
        price: "18.000",
    },
];

const itemsPerPage = 10;

// eslint-disable-next-line react/prop-types
function BookWithFilter({ title }) {
    const [pageCount, setPageCount] = useState(1);

    const maxIndex = pageCount * itemsPerPage;
    const minIndex = maxIndex - itemsPerPage;
    const total = listBooks.length;
    const newList = listBooks.slice(minIndex, maxIndex);

    const handlePagination = (page) => {
        setPageCount(page);
    };
    return (
        <div className="book-filter-container">
            <div className="title">
                <h1 className="title-text">{title}</h1>
                <div className="title-search">
                    <div className="filter-selection">
                        <select>
                            <option>Danh mục</option>
                            <option>Truyện Ngắn</option>
                            <option>Truyện Tranh</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="main-section">
                <div className="filter">
                    <div className="filter-textbox">
                        <input placeholder="Tìm theo tên sách" />
                        <button>
                            <AiOutlineSearch
                                fontSize={20}
                                stroke={"transparent"}
                                fill="#757575"
                            />
                        </button>
                    </div>
                    <div className="filter-selection">
                        <select>
                            <option>Tìm theo nhà tài trợ</option>
                            <option>Tập đoàn Bảo Việt</option>
                            <option>Quỹ từ thiện Ngân Hà</option>
                        </select>
                    </div>
                    <div className="filter-textbox">
                        <input placeholder="Tìm theo tên tác giả" />
                        <button>
                            <AiOutlineSearch
                                fontSize={20}
                                stroke={"transparent"}
                                fill="#757575"
                            />
                        </button>
                    </div>
                    <div className="filter-selection">
                        <select>
                            <option>Tìm theo tên gian hàng</option>
                            <option>NXB Bách khoa Hà Nội</option>
                            <option>NXB Xây dựng</option>
                        </select>
                    </div>
                    <div className="filter-textbox">
                        <input placeholder="Tìm theo nhà xuất bản" />
                        <button>
                            <AiOutlineSearch
                                fontSize={20}
                                stroke={"transparent"}
                                fill="#757575"
                            />
                        </button>
                    </div>
                    <div className="filter-textbox">
                        <input placeholder="Tìm theo đánh giá sao" />
                        <button>
                            <AiOutlineSearch
                                fontSize={20}
                                stroke={"transparent"}
                                fill="#757575"
                            />
                        </button>
                    </div>
                </div>
                <div className="book-list">
                    {newList.map((item) => (
                        <div key={item.id} className="book-item">
                            <BookCart
                                bookId={item.id}
                                img={item.img}
                                author={item.author}
                                title={item.title}
                                price={item.price}
                                currentRating={item.rating}
                            />
                        </div>
                    ))}
                </div>
                <div className="pagination-link">
                    <Pagination
                        className="pagination"
                        defaultCurrent={pageCount}
                        onChange={handlePagination}
                        total={total}
                    />
                    <div className="booklist-link">
                        <Link to={"/book"}>Xem tất cả</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookWithFilter;
