import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedLayout() {
    const user = useSelector((state) => state.auth.login.user);
    if (!user) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <Outlet />
        </>
    );
}

export default ProtectedLayout;
