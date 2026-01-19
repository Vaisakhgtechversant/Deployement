import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddData from "../pages/users/AddData";
import ViewData from "../pages/users/ViewData";
import EditData from "../pages/users/EditData";
import Calculator from "../pages/users/Calculator";
import LoginWrapper from "../Components/LoginWrapper";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adddata" element={<AddData />} />
        <Route path="/viewdata" element={<ViewData />} />
        <Route path="/editdata/:id" element={<EditData />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}
