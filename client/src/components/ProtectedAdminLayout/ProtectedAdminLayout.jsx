import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function ProtectedAdminLayout() {
    const user = useSelector((state) => state.auth.auth);

    if (user?.userInfo?.isAdmin) {
        return (
            <>
                <Outlet />
            </>
        );
    } else {
        return (
            <div
                style={{
                    width: "100%",
                    height: 542,
                    fontSize: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <span>Bạn không có quyền truy cập trang này</span>
            </div>
        );
    }
}

export default ProtectedAdminLayout;
