import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../service/userService";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/Slice/cartSlice";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.auth.accessToken);

    const handleLogout = () => {
        dispatch(logoutUser({ accessToken, navigate }));
        dispatch(clearCart());
    };

    return <div onClick={handleLogout}>Đăng xuất</div>;
}

export default Logout;
