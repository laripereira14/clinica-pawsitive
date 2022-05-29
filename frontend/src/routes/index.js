import Footer from "components/Footer";
import NavigationBar from "components/NavigationBar";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Specialty from "./Specialty";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<><NavigationBar/><Outlet/><Footer/></>}>
                <Route index element={<Home/>}/>
                <Route path=":specialtyName" element={<Specialty/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/minha-pawsitive" element={<Dashboard/>}/>
        </Routes>
    );
}

export default AppRoutes;