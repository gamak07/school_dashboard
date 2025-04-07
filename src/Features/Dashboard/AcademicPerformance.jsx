import React, { useState } from "react";
import TermlyBarChart from "./TermlyBarChart";
import WeeklyBarChart from "./WeeklyBarChart";
import MonthlyBarChart from "./MonthlyBarChart";

const AcademicPerformance = () => {
  const [activeBar, setActiveBar] = useState("weekly");
  const handleActiveBar = (bar) => {
    setActiveBar(bar)
  }
  return (
    <div className="bg-white shadow-md p-[1rem] w-2/3 rounded-[10px]">
      {/* chart header */}
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-bold">Academic Performance</p>
        <ul className="flex items-center gap-[5px]">
          <li
            className={`text-[15px] text-darkgray cursor-pointer hover:text-indigolight ${
              activeBar === "weekly" ? "text-indigo" : ""
            }`}
            onClick={() => handleActiveBar('weekly')}
          >
            Weekly
          </li>
          <li
            className={`text-[15px] text-darkgray cursor-pointer hover:text-indigolight ${
              activeBar === "monthly" ? "text-indigo" : ""
            }`}
            onClick={() => handleActiveBar('monthly')}
          >
            Monthly
          </li>
          <li
            className={`text-[15px] text-darkgray cursor-pointer hover:text-indigolight ${
              activeBar === "termly" ? "text-indigo" : ""
            }`}
            onClick={() => handleActiveBar('termly')}
          >
            Termly
          </li>
        </ul>
      </div>

      {/* bar chart */}
      <div className="w-full">
        {activeBar === "weekly" && <WeeklyBarChart />}
        {activeBar === "monthly" && <MonthlyBarChart />}
        {activeBar === "termly" && <TermlyBarChart />}
      </div>
    </div>
  );
};

export default AcademicPerformance;
