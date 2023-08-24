/* eslint-disable react/prop-types */
import { Button } from "antd";
import "./ButtonCustom.scss";

function ButtonCustom({ children }) {
    return (
        <>
            <Button className="btn">{children}</Button>
        </>
    );
}

export default ButtonCustom;
