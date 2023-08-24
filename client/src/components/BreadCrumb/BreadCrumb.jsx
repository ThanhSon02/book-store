import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

// eslint-disable-next-line react/prop-types
function BreadcrumbsCustom({ style }) {
    const location = useLocation();
    let crumbLink = "";
    const crumPath = location.pathname
        .split("/")
        .filter((path) => path !== "")
        .map((crumb) => {
            {
                crumbLink += `/${crumb}`;
                return (
                    <Link to={crumbLink} key={crumb}>
                        {crumb}
                    </Link>
                );
            }
        });
    return (
        <Breadcrumbs style={style}>
            <Link to={"/"}>Trang chủ</Link>
            {crumPath}
        </Breadcrumbs>
    );
}

export default BreadcrumbsCustom;
