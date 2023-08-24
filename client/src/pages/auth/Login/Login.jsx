import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../axios/axios";
import { toast } from "react-toastify";
function Login() {
    const navigate = useNavigate();
    const handleLoginForm = async (value) => {
        await axiosInstance
            .post("/auth/login", value)
            .then((res) => {
                toast.success(res.data.message);
                sessionStorage.setItem(
                    "accessToken",
                    JSON.stringify(res.data.accessToken)
                );
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLoginForm}>
                <Form.Item
                    name="email"
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
                    <Input
                        prefix={
                            <MailOutlined className="site-form-item-icon" />
                        }
                        style={{ width: "100%" }}
                        type="email"
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}>
                    <Input.Password
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className="checkbox-remember-password">
                            Remember me
                        </Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                    </Button>
                    Or{" "}
                    <Link to={"/register"} className="register-link">
                        register now!
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
