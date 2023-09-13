import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";

function AccountPage() {
    const [accountData, setAccountData] = useState({
        admin: { email: "", password: "" },
        paypal: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        axiosInstance
            .get("/admin_account")
            .then((result) => {
                setAccountData(result.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }, []);

    return (
        <div>
            <div>
                <h4>Admin</h4>
                <div>
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                        }}>
                        <h5>email: </h5>
                        <span>{accountData.admin.email}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                        }}>
                        <h5>password: </h5>
                        <span>{accountData.admin.password}</span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 32 }}>
                <h4>PayPal</h4>
                <div>
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                        }}>
                        <h5>email: </h5>
                        <span>{accountData.paypal.email}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                        }}>
                        <h5>password: </h5>
                        <span>{accountData.paypal.password}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
