/* eslint-disable no-unused-vars */
import { Button, Form, Input, Spin } from "antd";
import "./ProfileDetail.scss";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../service/userService";

function ProfileDetail() {
    const user = useSelector((state) => state.auth.auth);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const accessToken = user.accessToken;
    const dispatch = useDispatch();

    const fields = [
        {
            name: ["name"],
            value: user.userInfo?.name,
        },
        {
            name: ["phone"],
            value: user.userInfo?.phone,
        },
        {
            name: ["email"],
            value: user.userInfo?.email,
        },
        {
            name: ["address"],
            value: "" || user.userInfo?.address,
        },
    ];

    const handleSubmitForm = (userInfo) => {
        dispatch(updateUser({ userInfo, accessToken }));
    };

    return (
        <Spin spinning={isLoading}>
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
                            fields={fields}
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
                            <Form.Item
                                name="address"
                                labelCol={{ span: 6 }}
                                label="Địa chỉ">
                                <TextArea
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 6,
                                    }}
                                />
                            </Form.Item>

                            {/* <Form.Item
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
                            </Form.Item> */}

                            <Button htmlType="submit">
                                Cập nhật thông tin
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Spin>
    );
}

export default ProfileDetail;
