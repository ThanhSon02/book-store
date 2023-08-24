/* eslint-disable react/prop-types */
import { Tabs } from "antd";
import "./TabLayout.scss";

function TabLayout({ tabItems }) {
    return <Tabs defaultActiveKey="1" size="large" items={tabItems} />;
}

export default TabLayout;
