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
import { createBook } from "../../../service/bookService";
import { useState } from "react";
import ReactQuill from "react-quill";

const category = [
    {
        value: "economy",
        label: "Kinh tế",
    },
    {
        value: "science",
        label: "Khoa học",
    },
    {
        value: "politics-history",
        label: "Chính trị - Lịch sử",
    },
    {
        value: "horror-detective",
        label: "Kinh dị - Trinh thám",
    },
    {
        value: "literature-novels",
        label: "Văn học - Tiểu thuyết",
    },
    {
        value: "living-skill",
        label: "Kĩ năng sống",
    },
];
function AdminCreateBookModal({ formRef, form }) {
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
        const bookInfo = {
            ...formInfo,
            book_img: imgBase64,
        };
        dispatch(createBook({ bookInfo, accessToken }));
        form.resetFields();
    };
    return (
        <>
            <Form
                form={form}
                ref={formRef}
                onFinish={onSubmitForm}
                labelAlign={"left"}
                layout="vertical">
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
                <Form.Item labelCol={{ span: 6 }} label="Ảnh" name="book_img">
                    <Upload
                        maxCount={1}
                        beforeUpload={() => false}
                        onChange={(e) => handleUploadFile(e.file)}>
                        <Button icon={<UploadOutlined />}>
                            Click to Upload
                        </Button>
                    </Upload>
                </Form.Item>
            </Form>
        </>
    );
}

export default AdminCreateBookModal;
