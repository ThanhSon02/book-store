/* eslint-disable react/prop-types */
import "./IntroduceTab.scss";
function Introduce({ data }) {
    return (
        <div style={{ marginBottom: 30 }}>
            <h2>Giới thiệu sách</h2>
            <div className="introduce-text"></div>
            <h2 style={{ marginTop: 14 }}>Chi tiết sách</h2>
            <div className="book-detail">
                <div>
                    <h4>Nhà xuất bản:</h4>
                    <p>NXB Dân chí</p>
                </div>
                <div>
                    <h4>Năm xuất bản:</h4>
                    <p>2010</p>
                </div>
                <div>
                    <h4>Tác giả:</h4>
                    <p>Brad Stulberg</p>
                </div>
                <div>
                    <h4>Kích thước:</h4>
                    <p>20x25 (cm)</p>
                </div>
                <div>
                    <h4>Trọng lượng:</h4>
                    <p>400g</p>
                </div>
                <div>
                    <h4>Loại bìa:</h4>
                    <p>Bìa mềm</p>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
