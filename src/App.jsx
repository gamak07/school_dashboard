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
import ParentsAndGuardian from "./Pages/People/Parents/ParentsAndGuardian";
import Families from "./Pages/People/Parents/Families";
import Teachers from "./Pages/People/TeachersandStaffs/Teachers";
import AdmissionOfficer from "./Pages/People/TeachersandStaffs/AdmissionOfficer";
import Accountant from "./Pages/People/TeachersandStaffs/Accountant";
import Librarian from "./Pages/People/TeachersandStaffs/Librarian";
import HostelManager from "./Pages/People/TeachersandStaffs/HostelManager";
import TransportManager from "./Pages/People/TeachersandStaffs/TransportManager";
import GeneralStaffs from "./Pages/People/TeachersandStaffs/GeneralStaffs";
import Administrator from "./Pages/People/TeachersandStaffs/Administrator";
import Classes from "./Pages/Academics/Learning/Classes";
import Subjects from "./Pages/Academics/Learning/Subjects";
import Virtual from "./Pages/Academics/Learning/Virtual";
import Schedule from "./Pages/Academics/Learning/Schedule";
import QuestionsBank from "./Pages/Academics/CBT/QuestionsBank";
import Instructions from "./Pages/Academics/CBT/Instructions";
import Schedules from "./Pages/Academics/CBT/Schedules";
import Scores from "./Pages/Academics/CBT/Scores";

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
            <Route element={<ParentsAndGuardian />} path="/parents" />
            <Route element={<Families />} path="/families" />
            <Route element={<Teachers />} path="/teachers" />
            <Route element={<AdmissionOfficer />} path="/admission_officer" />
            <Route element={<Accountant />} path="/accountant" />
            <Route element={<Librarian />} path="/librarian" />
            <Route element={<HostelManager />} path="/hostel_manager" />
            <Route element={<TransportManager />} path="/transport_manager" />
            <Route element={<GeneralStaffs />} path="/general_staffs" />
            <Route element={<Administrator />} path="/admin" />
            <Route element={<Administrator />} path="/admin" />
            <Route element={<Classes />} path="/classes" />
            <Route element={<Subjects />} path="/subjects" />
            <Route element={<Virtual />} path="/virtual" />
            <Route element={<Schedule />} path="/schedule" />
            <Route element={<QuestionsBank />} path="/questions_bank" />
            <Route element={<Instructions />} path="/instructions" />
            <Route element={<Schedules />} path="/schedules" />
            <Route element={<Scores />} path="/scores" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
