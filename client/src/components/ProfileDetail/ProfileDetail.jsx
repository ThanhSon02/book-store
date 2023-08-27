import { Button, Form, Input, Switch, TreeSelect, Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import "./ProfileDetail.scss";
import { useState } from "react";
import axiosInstance from "../../axios/axios";

const treeData = [
    {
        value: "parent 1",
        title: "parent 1",
    },
];

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};

function ProfileDetail() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}>
                Upload
            </div>
        </div>
    );

    const handleSubmitForm = (value) => {
        console.log(value);
        axiosInstance
            .post("/user/profile/info/update", value)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="profile-detail">
            <div>
                <h2
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        marginBottom: 30,
                    }}>
                    Thông tin tài khoản
                </h2>
            </div>
            <div>
                <div>
                    <Form
                        labelCol={{ span: 3 }}
                        labelAlign={"left"}
                        layout="horizontal"
                        style={{
                            width: 700,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        onFinish={handleSubmitForm}>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Họ tên"
                            name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Số điện thoại"
                            name="phone">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Email"
                            name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} label="Tỉnh">
                            <TreeSelect treeData={treeData} />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} label="Huyện">
                            <TreeSelect treeData={treeData} />
                        </Form.Item>

                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Tải ảnh đại diện"
                            name="avatar">
                            <Upload
                                maxCount={1}
                                listType="picture-card"
                                accept="image/png, image/jpg, image/jpeg"
                                beforeUpload={() => false}
                                onChange={handleChange}>
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Đổi mật khẩu"
                            valuePropName="checked"
                            name="changePassword">
                            <Switch className="switch" />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Mật khẩu hiện tại"
                            name="current_password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="new_password"
                            labelCol={{ span: 6 }}
                            label="Mật khẩu mới">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            label="Xác nhận mật khẩu mới">
                            <Input />
                        </Form.Item>
                        <Button htmlType="submit">Cập nhật thông tin</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetail;
