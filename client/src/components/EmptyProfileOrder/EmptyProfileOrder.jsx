function EmptyProfileOrder() {
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 4,
            }}>
            <img src="/checklist.png" width={150} height={150} />
            <h3 style={{ marginTop: 16 }}>Chưa có đơn hàng</h3>
        </div>
    );
}

export default EmptyProfileOrder;
