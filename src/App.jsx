import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Dashboard from "./Pages/Dashboard";
import Library from "./Pages/Library";
import Class from "./Pages/Class";
import Parents from "./Pages/Parents";
import Finance from "./Pages/Finance";
import Notice from "./Pages/Notice";
import Exam from "./Pages/Exam";
import Hostel from "./Pages/Hostel";
import Reviews from "./Pages/Reviews";
import Attendance from "./Pages/Attendance";
import TeachersAttendance from "./Features/Attendance/TeachersAttendance";
import StudentsAttendance from "./Features/Attendance/StudentsAttendance";
import StaffsAttendance from "./Features/Attendance/StaffsAttendance";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Attendance />} path="/attendance">
              <Route index element={<TeachersAttendance />} />
              <Route element={<TeachersAttendance />} path="teachers" />
              <Route element={<StudentsAttendance />} path="students" />
              <Route element={<StaffsAttendance />} path="staffs" />
            </Route>
            <Route element={<Teachers />} path="/teachers" />
            <Route element={<Students />} path="/students" />
            <Route element={<Library />} path="/Library" />
            <Route element={<Class />} path="/class" />
            <Route element={<Parents />} path="/parents" />
            <Route element={<Finance />} path="/finance" />
            <Route element={<Notice />} path="/notice" />
            <Route element={<Exam />} path="/exam&results" />
            <Route element={<Hostel />} path="/hostel" />
            <Route element={<Reviews />} path="/reviews" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
