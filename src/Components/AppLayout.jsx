import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-[100vh] overflow-y-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
