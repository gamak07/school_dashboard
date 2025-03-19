import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import AppLayout from "./Features/Dashboard/AppLayout";
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

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Admin />} path="/admin" />
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
