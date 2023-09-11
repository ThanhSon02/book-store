import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import "./Register.scss";
import { registerUser } from "../../../service/userService";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegisterForm = (registerInfo) => {
        dispatch(registerUser({ registerInfo, navigate }));
    };

    return (
        <div className="register-container">
            <Form
                name="register"
                className="register-form"
                onFinish={handleRegisterForm}>
                <Form.Item
                    name="name"
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
                    ]}>
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
