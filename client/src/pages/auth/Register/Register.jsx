import { Link } from "react-router-dom";
import "./Register.scss";
import { Button, Form, Input } from "antd";
import axiosInstance from "../../../axios/axios";
import { toast } from "react-toastify";
function Register() {
    const handleRegisterForm = async (value) => {
        await axiosInstance
            .post("/auth/register", value)
            .then((res) => {
                if (res.isSuccess) {
                    toast.success(res.message);
                }
            })
            .catch((err) => {
                toast.error(err);
                console.log(err);
            });
    };
    return (
        <div className="register-container">
            <Form
                name="register"
                className="register-form"
                onFinish={handleRegisterForm}>
                <Form.Item
                    name="yourname"
                    label="Your Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                            whitespace: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                    ]}>
                    <Input style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The new password that you entered do not match!"
                                    )
                                );
                            },
                        }),
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="register-btn"
                        type="primary"
                        htmlType="submit">
                        Register
                    </Button>
                    Or{" "}
                    <Link to={"/login"} className="login-link">
                        login now!
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Register;
