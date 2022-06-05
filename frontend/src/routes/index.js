import Footer from "components/Footer";
import NavigationBar from "components/NavigationBar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Specialty from "./Specialty";
import Dashboard from "./Dashboard";
import DashboardIndex from "./Dashboard/DashboardIndex";
import History from "./Dashboard/History";
import SignUp from "./SignUp";
import UpdateData from "./Dashboard/UpdateData";
import Booking from "./Dashboard/Booking";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<><NavigationBar/><Outlet/><Footer/></>}>
                <Route index element={<Home/>}/>
                <Route path=":specialtyName" element={<Specialty/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/minha-pawsitive" element={<Dashboard/>}>
                <Route index element={<DashboardIndex/>}/>
                <Route path="historico" element={<History/>}/>
                <Route path="meus-dados" element={<UpdateData/>}/>
                <Route path="agendar-visita" element={<Booking/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;