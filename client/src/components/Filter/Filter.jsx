import { Button, Drawer, Input } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import "./Filter.scss";
import { useState } from "react";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterPrice, filterRating } from "../../redux/Slice/filterSlice";

function Filter() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={showDrawer}>
                <FilterOutlined />
            </Button>
            <Drawer
                title="Filter"
                placement={"right"}
                width={240}
                onClose={onClose}
                open={open}>
                <div className="filter-main">
                    <div className="filter-rating">
                        <h3 className="filter-title">Đánh giá</h3>
                        <div className="filter-rating-box">
                            <a
                                onClick={() => dispatch(filterRating(5))}
                                className="filter-rating-link">
                                <Rating size="small" readOnly value={5} />{" "}
                                <span>Từ 5 sao</span>
                            </a>
                            <a
                                onClick={() => dispatch(filterRating(4))}
                                className="filter-rating-link">
                                <Rating size="small" readOnly value={4} />{" "}
                                <span>Từ 4 sao</span>
                            </a>
                            <a
                                onClick={() => dispatch(filterRating(3))}
                                className="filter-rating-link">
                                <Rating size="small" readOnly value={3} />{" "}
                                <span>Từ 3 sao</span>
                            </a>
                        </div>
                    </div>
                    <div className="filter-price">
                        <h3 className="filter-title">Giá</h3>
                        <div className="filter-price-box">
                            <p>Chọn khoảng giá</p>
                            <div className="filter-price-input">
                                <Input
                                    type="number"
                                    min={minPrice}
                                    onChange={(e) =>
                                        setMinPrice(e.target.value)
                                    }
                                />
                                <span>-</span>
                                <Input
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value)
                                    }
                                />
                            </div>
                            <Button
                                onClick={() =>
                                    dispatch(
                                        filterPrice({
                                            min: minPrice,
                                            max: maxPrice,
                                        })
                                    )
                                }
                                className="filter-price-btn">
                                Áp dụng
                            </Button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default Filter;
