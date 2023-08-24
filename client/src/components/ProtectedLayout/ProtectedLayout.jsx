import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedLayout() {
    const isLogin = useSelector((state) => state.user.isLogin);
    if (!isLogin) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <Outlet />
        </>
    );
}

export default ProtectedLayout;
