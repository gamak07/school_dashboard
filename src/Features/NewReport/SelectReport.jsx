import React, { useState } from "react";
import { BsPersonCheck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdMoney } from "react-icons/md";
import { useReportContext } from "../../context/ReportContext";

const SelectReport = () => {
  const { state, dispatch } = useReportContext();
  
  const reports = [
    {
      icon: <BsPersonCheck />,
      type: "Attendance Report",
      details:
        "Track student attendance patterns and identify trends over time.",
      iconStyle: "bg-blue text-lightblue",
      idName: "attendance",
    },
    {
      icon: <FaGraduationCap />,
      type: "Academic Performance",
      details:
        "Analyze student performance across subjects and identify areas for improvement.",
      iconStyle: "bg-green text-lightgreen",
      idName: "performance",
    },
    {
      icon: <MdMoney />,
      type: "Financial Report",
      details:
        "Track fee collection, expenses, and generate financial summaries.",
      iconStyle: "bg-orange text-lightorange",
      idName: "financial",
    },
  ];
  return (
    <div className="mt-[1.5rem]">
      <h1 className="text-black font-bold text-[20px]">Select Report Type</h1>
      <div className="mt-[1rem] flex items-center gap-[1rem] justify-between">
        {reports.map((report) => (
          <div
            key={report.type}
            className={`relative shadow-md bg-white w-1/3 rounded-[10px] p-[1.5rem] hover:shadow-sm ${
              state.selectedReport === report.idName ? "border-2 border-blue" : ""
            }`}
            onClick={() =>
              dispatch({ type: "set_report", payload: report.idName })
            }
          >
            {state.selectedReport === report.idName && (
              <span className="absolute top-[2rem] right-[1rem] h-[2rem] w-[2rem] bg-blue text-white flex items-center justify-center rounded-full">
                <IoMdCheckmark />
              </span>
            )}
            <p
              className={`text-[30px] mb-[1rem] rounded-full h-[3rem] w-[3rem] flex items-center justify-center ${report.iconStyle}`}
            >
              {report.icon}
            </p>
            <h3 className="text-black text-[18px] font-semibold mb-[10px]">
              {report.type}
            </h3>
            <p className="text-darkgray text-[14px]">{report.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectReport;
