import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Dashboard from "./Pages/Dashboard";
import Library from "./Pages/Admission/AdmissionSettings";
import ApplicationsReceived from "./Pages/Admission/ApplicationsReceived";
import Parents from "./Pages/Parents";
import Finance from "./Pages/Admission/InputEntranceExam";
import Notice from "./Pages/Notice";
import Exam from "./Pages/Admission/EntranceExamination";
import Hostel from "./Pages/Admission/ReviewEntranceExam";
import Reviews from "./Pages/Reviews";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route element={<Dashboard />} path="/" />
            <Route element={<ApplicationsReceived />} path="/applications" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
