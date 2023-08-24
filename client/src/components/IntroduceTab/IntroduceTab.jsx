import "./IntroduceTab.scss";
function Introduce() {
    return (
        <div style={{ marginBottom: 30 }}>
            <h2>Giới thiệu sách</h2>
            <div className="introduce-text">
                <p>
                    <span>
                        {" "}
                        Con đường dẫn đến thành công bền vững và một cuộc sống
                        trọn vẹn.
                    </span>
                </p>
                <p className="ql-align-justify">
                    <span> </span>
                </p>
                <p className="ql-align-justify">
                    <span>
                        {" "}
                        Cuộc sống tất bật ngày nay dễ khiến người ta sợ cảm giác
                        bị bỏ lại phía sau. Để bắt kịp bạn bè hay đồng nghiệp,
                        rất nhiều người đã chọn cách quay cuồng trong công việc,
                        ráo riết theo đuổi hết mục tiêu này tới thành tựu khác,
                        để rồi vào những phút giây hiếm hoi khi guồng quay đó
                        dừng lại, họ lại rơi vào cảm giác mông lung vô định,
                        không biết mình phải đi đâu về đâu.
                    </span>
                </p>
                <p className="ql-align-justify">
                    <span> </span>
                </p>
                <p className="ql-align-justify">
                    <span>
                        {" "}
                        Brad Stulberg – chuyên gia nổi tiếng thế giới về hiệu
                        quả làm việc, hạnh phúc và thành công bền vững – đã mô
                        tả đây là trạng thái “rơi vào vùng trống rỗng”, tình
                        trạng thường gặp ở thế kỷ 21, xuất hiện ở rất nhiều đối
                        tượng, từ các doanh nhân thành đạt, vận động viên nổi
                        tiếng cho đến các sinh viên hay người nội trợ.
                    </span>
                </p>
            </div>
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
