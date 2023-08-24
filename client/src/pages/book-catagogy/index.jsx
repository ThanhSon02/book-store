import { useEffect } from "react";
import BreadcrumbsCustom from "../../components/BreadCrumb/BreadCrumb";

import Category from "../../components/Category/Category";

function BookCategory() {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <BreadcrumbsCustom style={{ marginBottom: 20 }} />
            <Category />
        </>
    );
}

export default BookCategory;
