import React from "react";
import DashboardOverview from "../Features/Dashboard/DashboardOverview";
import NoticeOverview from "../Features/Dashboard/NoticeOverview";
import RevenueOverview from "../Features/Dashboard/RevenueOverview";
import IncomeOverview from "../Features/Dashboard/IncomeOverview";
import ExpensesOverview from "../Features/Dashboard/ExpensesOverview";
import AttendanceOverview from "../Features/Dashboard/AttendanceOverview";
import LibraryOverview from "../Features/Dashboard/LibraryOverview";
import CalendarOverview from "../Features/Dashboard/CalendarOverview";
import BestStudentsOverview from "../Features/Dashboard/BestStudentsOverview";
import EventsOverview from "../Features/Dashboard/EventsOverview";
import SchoolOverview from "../Features/Dashboard/SchoolOverview";

const Dashboard = () => {
  return (
    <div className="h-[90vh] flex gap-[1rem] bg-primary p-[2rem] w-full overflow-y-auto">
      <div className="w-[65%]">
        <DashboardOverview />
        <RevenueOverview />
        <div className="w-full flex gap-[1rem]">
          <IncomeOverview />
          <ExpensesOverview />
        </div>
        <div className="w-full flex gap-[1rem]">
          <AttendanceOverview />
          <LibraryOverview />
        </div>
        <CalendarOverview />
      </div>
      <div className="w-[35%]">
        <NoticeOverview />
        <EventsOverview />
        <BestStudentsOverview />
        <SchoolOverview />
      </div>
    </div>
  );
};

export default Dashboard;
