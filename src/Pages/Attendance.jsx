import React from "react";
import { Outlet } from "react-router-dom";

const Attendance = () => {
  return (
    <div className="bg-primary h-[90vh] w-full p-[1rem] overflow-y-auto">
      
      <Outlet />
    </div>
  );
};

export default Attendance;
