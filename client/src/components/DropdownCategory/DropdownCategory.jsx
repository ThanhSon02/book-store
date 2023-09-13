/* eslint-disable react/prop-types */
import { Dropdown } from "antd";

const items = [
    {
        key: "1",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/economy">
                Kinh tế
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/science">
                Khoa học
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/politics-history">
                Chính trị - Lịch sử
            </a>
        ),
    },
    {
        key: "4",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/horror-detective">
                Kinh dị - trinh thám
            </a>
        ),
    },
    {
        key: "5",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/literature-novels">
                Văn học - Tiểu thuyết
            </a>
        ),
    },
    {
        key: "6",
        label: (
            <a style={{ fontWeight: 500 }} href="/category/living-skill">
                Kĩ năng sống
            </a>
        ),
    },
];

function DropdownCategory({ children }) {
    return (
        <>
            <Dropdown menu={{ items }}>{children}</Dropdown>
        </>
    );
}

export default DropdownCategory;
