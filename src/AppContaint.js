import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Component/AuthContaxt";

import Navbar from "./Component/Navbar";
import MainNavBar from "./Component/MainNavBar";
import Home from "./Component/Home";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Welcome from "./Component/Welcome";
import EmployeeForm from "./Component/EmpForm";
import ViewAllEmp from "./Component/ViewAllEmploy";

function AppContaint() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? <MainNavBar /> : <Navbar />}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Welcome /> : <Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addemp" element={<EmployeeForm />} />
        <Route path="/view" element={<ViewAllEmp />} />
      </Routes>
    </div>
  );
}

export default AppContaint;
