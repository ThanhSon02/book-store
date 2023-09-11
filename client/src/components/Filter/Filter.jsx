import { Button, Checkbox, Drawer, Input } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import "./Filter.scss";
import { useState } from "react";
import { Rating } from "@mui/material";

function Filter() {
    const [open, setOpen] = useState(false);
    const plainOptions = [
        "NXB Kim Đồng",
        "Nhà sách Fahasa",
        "Sách Đại Nam",
        "Nhà sách Phương Nam",
    ];
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
                            <a className="filter-rating-link">
                                <Rating size="small" readOnly value={5} />{" "}
                                <span>Từ 5 sao</span>
                            </a>
                            <a className="filter-rating-link">
                                <Rating size="small" readOnly value={4} />{" "}
                                <span>Từ 4 sao</span>
                            </a>
                            <a className="filter-rating-link">
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
                                <Input />
                                <span>-</span>
                                <Input />
                            </div>
                            <Button className="filter-price-btn">
                                Áp dụng
                            </Button>
                        </div>
                    </div>
                    <div className="filter-supplier">
                        <h3 className="filter-title">Nhà cung cấp</h3>
                        <div className="filter-supplier-box">
                            <Checkbox.Group options={plainOptions}>
                                NXB Kim Đồng
                            </Checkbox.Group>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default Filter;
