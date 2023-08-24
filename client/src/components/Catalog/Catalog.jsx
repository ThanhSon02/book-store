import { AiOutlineFileSearch } from "react-icons/ai";
import { MdChildCare } from "react-icons/md";
import {
    GiBookAura,
    GiBookshelf,
    GiMaterialsScience,
    GiBookCover,
    GiSecretBook,
} from "react-icons/gi";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Catalog.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg from "../Slider/SliderImg";

function Catalog() {
    const cataList = [
        {
            id: 1,
            title: "Sách nổi bật",
            icon: <AiOutlineFileSearch />,
            child: [
                { id: 1, title: "Sách hay được nhiều người yêu thích" },
                { id: 2, title: "Nhiều người giới thiệt" },
                { id: 3, title: "Tác phẩm đoạt giải Nobel" },
            ],
        },
        {
            id: 2,
            title: "Sách thiếu nhi",
            icon: <MdChildCare />,
            child: [
                { id: 1, title: "Truyện tranh" },
                { id: 2, title: "Bách khoa tri thức" },
                { id: 3, title: "Sách song ngữ thiếu nhi" },
                { id: 4, title: "Sách tô màu" },
                { id: 5, title: "Văn học thiếu nhi" },
                { id: 6, title: "Manga - Comic" },
            ],
        },
        {
            id: 3,
            title: "Sách dành cho giới trẻ",
            icon: <GiBookAura />,
            child: [
                { id: 1, title: "Kỹ năng sống" },
                { id: 2, title: "Kỹ năng nghề nghiệp" },
                { id: 3, title: "Phát triển tâm thức" },
                { id: 4, title: "Phổ biến kiến thức" },
            ],
        },
        {
            id: 4,
            title: "Tủ sách gia đình",
            icon: <GiBookshelf />,
            child: [
                { id: 1, title: "Nuôi dạy con" },
                { id: 2, title: "Chăm sóc sức khoẻ" },
                { id: 3, title: "Hôn nhân gia đình" },
                { id: 4, title: "Cẩm nang du lịch" },
                { id: 5, title: "Dạy nấu ăn" },
                { id: 6, title: "Thời trang - Làm đẹp" },
            ],
        },
        {
            id: 5,
            title: "Sách khoa học - công nghệ",
            icon: <GiMaterialsScience />,
            child: [
                { id: 1, title: "Công nghệ thông tin" },
                { id: 2, title: "Tạp chí khoa học" },
                { id: 3, title: "Khoa học tự nhiên" },
                { id: 4, title: "Y - dược" },
                { id: 5, title: "Cơ khí, chế tạo Máy" },
                { id: 6, title: "Xây dựng, kiến trúc" },
                { id: 7, title: "Điện - Điện tử" },
                { id: 8, title: "Môi trường" },
                { id: 9, title: "Địa lý, thiên văn" },
                { id: 10, title: "Chuyển đổi số" },
            ],
        },
        {
            id: 6,
            title: "Sách quản lý - kinh tế",
            icon: <GiBookCover />,
            child: [
                { id: 1, title: "Quản trị - Kinh doanh" },
                { id: 2, title: "Marketing" },
                { id: 3, title: "Start-up" },
                { id: 4, title: "Doanh nhân" },
                { id: 5, title: "Sách kinh tế" },
                { id: 6, title: "Quản lý nhà nước" },
            ],
        },
        {
            id: 7,
            title: "Sách chính trị - xã hội",
            icon: <GiSecretBook />,
            child: [
                { id: 1, title: "Sách Lịch sử" },
                { id: 2, title: "Văn hóa - Xã hội" },
                { id: 3, title: "Chính trị - Tư tưởng" },
                { id: 4, title: "Pháp luật" },
                { id: 5, title: "Những vấn đề quốc tế" },
                { id: 6, title: "Sách tôn giáo" },
                { id: 7, title: "Chủ tịch Hồ Chí Minh" },
            ],
        },
        {
            id: 8,
            title: "Tất cả danh mục",
            icon: <CgMenuRound />,
            child: [
                { id: 1, title: "Sách thiếu nhi" },
                { id: 2, title: "Sách dành cho giới trẻ" },
                { id: 3, title: "Sách Chính trị - Xã hội" },
                { id: 4, title: "Tủ sách gia đình" },
                { id: 5, title: "Sách Giáo khoa - Giáo trình" },
                { id: 6, title: "Sách ngoại ngữ" },
                { id: 7, title: "Sách Quản lý - Kinh tế" },
                { id: 8, title: "Sách Khoa học - Công nghệ" },
                { id: 9, title: "Sách khác" },
                { id: 10, title: "Văn học - Nghệ thuật" },
            ],
        },
    ];

    return (
        <div className="catalog">
            <ul className="catalog-list">
                {cataList.map((cataItem) => (
                    <li key={cataItem.id} className="catalog-item">
                        {cataItem.icon}
                        <Link className="catalog-link">
                            {cataItem.title}
                            {cataItem.child ? (
                                <ul>
                                    {cataItem.child.map((item) => (
                                        <li key={item.id}>{item.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                <></>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
            <SliderImg />
        </div>
    );
}

export default Catalog;
