import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { Mainpage } from "./pages/Mainpage";
import { Register } from "./pages/authentication/Register";
import { LoginCustomer } from "./pages/authentication/LoginCustomer";
import { LoginEmployee } from "./pages/authentication/LoginEmployee";
import { DashboardCustomer } from "./pages/dashboard/DashboardCustomer";
import { DashboardEmployee } from "./pages/dashboard/DashboardEmployee";

export default function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login-customer" element={<LoginCustomer />} />
          <Route path="/login-employee" element={<LoginEmployee />}/>
          <Route path="/dashboard-customer" element={<DashboardCustomer />}/>
          <Route path="/dashboard-employee" element={<DashboardEmployee />}/>
        </Routes>
      </Routers>
    </>
  );
}
