import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="flex w-[100%]">
      <Sidebar />
      <div className=" w-[85%]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
