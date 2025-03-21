import React from "react";
import TeachersAttendanceStats from "./TeachersAttendanceStats";
import TeachersAttendanceHistory from "./TeachersAttendanceHistory";
import Header from "./Header";

const TeachersAttendance = () => {
  return (
    <>
      <div className="bg-background p-[1rem] rounded-[10px]">
        <Header />
        <TeachersAttendanceStats />
      </div>
      <TeachersAttendanceHistory />
    </>
  );
};

export default TeachersAttendance;
