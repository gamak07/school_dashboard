import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Dashboard from "./Pages/Dashboard";
import ELearning from "./Pages/ELearning";
import StaffManagement from "./Pages/StaffManagement";
import FacilityManagement from "./Pages/FacilityManagement";
import ExaminationPortal from "./Pages/ExaminationPortal";
import Settings from "./Pages/Settings";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} path="/" />
            <Route index element={<ELearning />} path="/e-learning" />
            <Route index element={<StaffManagement />} path="/staff_management" />
            <Route index element={<FacilityManagement />} path="/facility_management" />
            <Route index element={<ExaminationPortal />} path="/examination_portal" />
            <Route index element={<Settings />} path="/settings" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
