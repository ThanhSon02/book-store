import "./Category.scss";
import { catagory } from "../../data/catagory";
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Button } from "antd";
import { listBooks } from "../../data/data";
import BookCart from "../BookCard/BookCard";
function Category() {
    const [showSubCatagory, setShowSubCatagory] = useState(false);

    const handleArrowBtn = (e) => {
        if (showSubCatagory) {
            e.currentTarget.classList.remove("disable");
            setShowSubCatagory(false);
        } else {
            e.currentTarget.classList.add("disable");
            setShowSubCatagory(true);
        }
    };

    return (
        <div className="category-content">
            <div className="category-box">
                <h1 className="title">Danh mục</h1>
                <div className="category-option">
                    <div className="topic">
                        <ul className="list-dept-0">
                            {catagory.map((item) => (
                                <li className="item-dept-0" key={item.id}>
                                    <div
                                        onClick={(e) => handleArrowBtn(e)}
                                        className="active-sub-catagory disable">
                                        {item.title}
                                        <IoMdArrowDropup className="arrow-icon" />
                                    </div>
                                    {item.child !== undefined ? (
                                        <ul className={"list-dept-1"}>
                                            {item.child.map((item_child) => (
                                                <li
                                                    className="item-dept-1"
                                                    key={item_child.id}>
                                                    {item_child.title}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <></>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="price">
                        <h3>Giá</h3>
                        <div>
                            <label htmlFor="min-input">Chọn khoảng giá</label>
                            <div
                                style={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "center",
                                }}>
                                <input
                                    id="min-input"
                                    className="min-input"
                                    type="text"
                                    min={0}
                                />
                                <span>-</span>
                                <input className="max-input" type="text" />
                            </div>
                        </div>
                        <Button className="catagory-btn">Tìm</Button>
                    </div>
                    <div className="rating">
                        <h3>Đánh giá</h3>
                        <select>
                            <option value={"all"}>Tất cả</option>
                            <option value={1}>Từ 1 sao</option>
                            <option value={2}>Từ 2 sao</option>
                            <option value={3}>Từ 3 sao</option>
                            <option value={4}>Từ 4 sao</option>
                            <option value={5}>Từ 5 sao</option>
                        </select>
                    </div>
                    <div className="author">
                        <h3>Tác giả</h3>
                        <div>
                            <input type="text" />
                            <Button className="catagory-btn">Tìm</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-result">
                {listBooks.map((item) => (
                    <BookCart
                        bookId={item.id}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        author={item.author}
                        currentRating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Category;
