import BookDetail from "../../components/BookDetail/BookDetail";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TabLayout from "../../components/TabLayout/TabLayout";
import IntroduceTab from "../../components/IntroduceTab/IntroduceTab";
import OrderTab from "../../components/OrderTab/Ordertab";
function Detail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const id = useLocation();
    const data = {
        id: id.pathname,
        bookImg: "/book-img-lg.jpeg",
        bookTitle: "Nghệ Thuật Sống Vững Vàng",
        author: "Brad Stulberg",
        catagory: "Sách dành cho giới trẻ",
        bookType: "Sách in",
        price: 168000,
        discount: 20,
        stock: "Còn hàng",
    };

    return (
        <>
            <BookDetail data={data} />
            <TabLayout
                tabItems={[
                    {
                        key: "1",
                        label: "Giới thiệu",
                        children: <IntroduceTab />,
                    },
                    {
                        key: "2",
                        label: "Cách đặt hàng",
                        children: <OrderTab />,
                    },
                    {
                        key: "3",
                        label: "Thanh toán",
                        children: `Content of Tab Pane 3`,
                    },
                    {
                        key: "4",
                        label: "Bình luận",
                        children: `Content of Tab Pane 4`,
                    },
                ]}
            />
        </>
    );
}

export default Detail;
