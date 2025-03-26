import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";

import Dashboard from "./Pages/Dashboard";
import ApplicationsReceived from "./Pages/Admission/ApplicationsReceived";

import EntranceExamination from "./Pages/Admission/EntranceExamination";
import InputEntranceExam from "./Pages/Admission/InputEntranceExam";
import ReviewEntranceExam from "./Pages/Admission/ReviewEntranceExam";
import AdmissionSettings from "./Pages/Admission/AdmissionSettings";
import ViewStudents from "./Pages/People/Students/ViewStudents";
import EnrollStudents from "./Pages/People/Students/EnrollStudents";
import Promotions from "./Pages/People/Students/Promotions";
import Tags from "./Pages/People/Students/Tags";
import Alumni from "./Pages/People/Students/Alumni";
import CommunicationBook from "./Pages/People/Students/CommunicationBook";
import Birthday from "./Pages/People/Students/Birthday";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route element={<Dashboard />} path="/" />
            <Route element={<ApplicationsReceived />} path="/applications" />
            <Route element={<EntranceExamination />} path="/entrance_exam" />
            <Route element={<InputEntranceExam />} path="/entrance_exam_scores" />
            <Route element={<ReviewEntranceExam />} path="/review_exam_scores" />
            <Route element={<AdmissionSettings />} path="/admission_settings" />
            <Route element={<ViewStudents />} path="/students" />
            <Route element={<EnrollStudents />} path="/enroll" />
            <Route element={<Promotions />} path="/promotions" />
            <Route element={<Tags />} path="/tags" />
            <Route element={<Alumni />} path="/alumni" />
            <Route element={<CommunicationBook />} path="/communication" />
            <Route element={<Birthday />} path="/birthdays" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
