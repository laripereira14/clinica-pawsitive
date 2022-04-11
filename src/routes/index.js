import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="/g" element={<div> oi </div>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;