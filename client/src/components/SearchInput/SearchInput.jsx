import { Select } from "antd";
import "./SearchInput.scss";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchInput() {
    const books = useSelector((state) => state.books.bookList);
    const [searchInput, setSearchInput] = useState();
    const navigate = useNavigate();
    const url = useLocation();
    useEffect(() => {
        if (url.pathname.split("/")[1] !== "detail") {
            setSearchInput("");
        }
    }, [url]);
    return (
        <Select
            className="search-input"
            size="large"
            defaultActiveFirstOption={false}
            showSearch={true}
            showArrow={false}
            value={searchInput}
            onChange={(value) => {
                setSearchInput(value);
                if (value !== "") {
                    navigate(`/detail/${value}`);
                }
            }}
            filterOption={(inputValue, option) =>
                option.title.toLowerCase().includes(inputValue)
            }>
            {books.map((book) => (
                <Select.Option
                    key={book._id}
                    title={book.book_name}
                    value={book._id}>
                    {book.book_name}
                </Select.Option>
            ))}
        </Select>
    );
}

export default SearchInput;
