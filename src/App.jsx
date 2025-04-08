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
import NewReport from "./Pages/NewReport";
import { ReportProvider } from "./context/ReportContext";

const App = () => {
  return (
    <ReportProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} path="/" />
            <Route element={<ELearning />} path="/e-learning" />
            <Route element={<StaffManagement />} path="/staff_management" />
            <Route
              element={<FacilityManagement />}
              path="/facility_management"
            />
            <Route element={<ExaminationPortal />} path="/examination_portal" />
            <Route element={<Settings />} path="/settings" />
          </Route>
          <Route element={<NewReport />} path="/new_report" />
        </Routes>
      </BrowserRouter>
    </ReportProvider>
  );
};

export default App;
