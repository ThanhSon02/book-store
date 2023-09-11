import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedLayout() {
    const user = useSelector((state) => state.auth.auth.userInfo);
    if (user === null) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <Outlet />
        </>
    );
}

export default ProtectedLayout;
