import React from "react";
import ReportStats from "../Features/Dashboard/ReportStats";
import AcademicPerformance from "../Features/Dashboard/AcademicPerformance";
import FeesCollection from "../Features/Dashboard/FeesCollection";
import Attendance from "../Features/Dashboard/Attendance";
import UpcomingEvents from "../Features/Dashboard/UpcomingEvents";
import QuickActions from "../Features/Dashboard/QuickActions";
import RecentActivities from "../Features/Dashboard/RecentActivities";

const Dashboard = () => {
  return (
    <div className="p-[1rem] bg-background w-full">
      <ReportStats />
      <div className="mt-[2rem] flex gap-[1rem] w-full">
        <AcademicPerformance />
        <FeesCollection />
      </div>
      <div className="mt-[2rem] flex gap-[1rem] w-full">
        <Attendance />
        <UpcomingEvents />
        <QuickActions />
      </div>
      <div className="mt-[2rem]">
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;
