import { Navigate, Outlet } from "react-router-dom";

const PrivateCompo = () => {

    const auth = localStorage.getItem("token")
    return auth ? <Outlet /> : <Navigate to="/register" />
}
export default PrivateCompo;