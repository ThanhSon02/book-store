/* eslint-disable react/prop-types */
import {
    Button,
    Checkbox,
    Form,
    Input,
    InputNumber,
    Rate,
    Select,
    Space,
    Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../../service/bookService";
import { useState } from "react";
import ReactQuill from "react-quill";

const category = [
    {
        value: "Kinh tế",
        label: "Kinh tế",
    },
    {
        value: "Khoa học",
        label: "Khoa học",
    },
    {
        value: "Chính trị - Lịch sử",
        label: "Chính trị - Lịch sử",
    },
    {
        value: "Kinh dị - Trinh thám",
        label: "Kinh dị - Trinh thám",
    },
    {
        value: "Văn học - Tiểu thuyết",
        label: "Văn học - Tiểu thuyết",
    },
    {
        value: "Kĩ năng sống",
        label: "Kĩ năng sống",
    },
];
function AdminUpdateBookModal({ formRef, currentData }) {
    const [imgBase64, setImgBase64] = useState("");

    const getBase64 = (img) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setImgBase64(reader.result);
        });
        if (img) {
            reader.readAsDataURL(img);
        }
    };

    const handleUploadFile = (file) => {
        if (file.status !== "removed") {
            getBase64(file);
        }
    };

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.auth.accessToken);

    const onSubmitForm = (formInfo) => {
        const bookUpdate = {
            ...formInfo,
            imgUpdate: imgBase64,
            book_img: currentData.book_img,
            _id: currentData._id,
        };

        dispatch(updateBook({ bookUpdate, accessToken }));
    };

    const field = [
        {
            name: ["book_name"],
            value: currentData.book_name,
        },
        {
            name: ["author"],
            value: currentData.author,
        },
        {
            name: ["category"],
            value: currentData.category,
        },
        {
            name: ["rating"],
            value: currentData.rating,
        },
        {
            name: ["in_stock"],
            value: currentData.in_stock,
        },
        {
            name: ["selled"],
            value: currentData.selled,
        },
        {
            name: ["discount"],
            value: currentData.discount,
        },
        {
            name: ["price"],
            value: currentData.price,
        },
        {
            name: ["description"],
            value: currentData.description,
        },
        {
            name: ["imgUpdate"],
            value: currentData.book_img,
        },
        {
            name: ["new_book"],
            value: currentData.new_book,
        },
    ];

    return (
        <>
            <Form
                ref={formRef}
                onFinish={onSubmitForm}
                labelAlign={"left"}
                layout="vertical"
                fields={field}>
                <Form.Item
                    labelCol={{ span: 6 }}
                    label="Tên sản phẩm"
                    name="book_name">
                    <Input allowClear />
                </Form.Item>
                <Form.Item labelCol={{ span: 6 }} label="Tác giả" name="author">
                    <Input allowClear />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 6 }}
                    label="Chọn danh mục"
                    name="category">
                    <Select options={category} />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 6 }}
                    label="Đánh giá"
                    name="rating">
                    <Rate />
                </Form.Item>
                <Form.Item labelCol={{ span: 6 }} label="Giá" name="price">
                    <InputNumber
                        min={0}
                        max={100000000}
                        formatter={(value) => `${value}đ`}
                        parser={(value) => value.replace("đ", "")}
                    />
                </Form.Item>
                <Space size={"large"}>
                    <Form.Item label="Số lượng" name="in_stock">
                        <InputNumber min={0} max={1000} />
                    </Form.Item>
                    <Form.Item label="Đã bán" name="selled">
                        <InputNumber min={0} max={1000} />
                    </Form.Item>
                    <Form.Item label="Khuyến mại" name="discount">
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={(value) => `${value}%`}
                            parser={(value) => value.replace("%", "")}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mới"
                        name="new_book"
                        valuePropName="checked"
                        initialValue={false}>
                        <Checkbox></Checkbox>
                    </Form.Item>
                </Space>
                <Form.Item
                    labelCol={{ span: 6 }}
                    label="Mô tả"
                    name="description">
                    <ReactQuill></ReactQuill>
                </Form.Item>
                <Form.Item labelCol={{ span: 6 }} label="Ảnh" name="imgUpdate">
                    <Upload
                        maxCount={1}
                        beforeUpload={() => false}
                        onChange={(e) => handleUploadFile(e.file)}>
                        {currentData.book_img ? (
                            <img
                                src={imgBase64 || currentData.book_img}
                                alt="avatar"
                                style={{
                                    aspectRatio: "120/180",
                                    height: 180,
                                }}
                            />
                        ) : (
                            <Button icon={<UploadOutlined />}>
                                Click to Upload
                            </Button>
                        )}
                    </Upload>
                </Form.Item>
            </Form>
        </>
    );
}

export default AdminUpdateBookModal;
