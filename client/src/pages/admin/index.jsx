import { Outlet } from "react-router-dom";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";

function AdminPage() {
    return (
        <>
            <AdminLayout>
                <Outlet />
            </AdminLayout>
        </>
    );
}

export default AdminPage;
