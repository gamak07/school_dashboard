import React from "react";
import { useReportContext } from "../../context/ReportContext";
import { MdMoney } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { data } from "react-router-dom";
import AttendanceBarChart from "./AttendanceBarChart";
import PerformanceBarChart from "./PerformanceBarChart";
import FinancialBarChart from "./FinancialBarChart";
import AttendanceLineChart from "./AttendanceLineChart";
import PerformanceLineChart from "./PerformanceLineChart";
import FinancialLineChart from "./FinancialLineChart";
import AttendancePieChart from "./AttendancePieChart";
import PerformancePieChart from "./PerformancePieChart";
import FinancialPieChart from "./FinancialPieChart";

const ReportReview = () => {
  const { state } = useReportContext();
  const { showPreview, selectedReport, reportParams } = state;
  const {
    selectedClasses = [],
    chartType,
    startDate,
    endDate,
    dataPoints = [],
    notes,
  } = reportParams;

  console.log(notes);

  const rawSelectedClasses = selectedClasses || {};
  const selectedClass = Array.isArray(rawSelectedClasses)
    ? rawSelectedClasses
    : Object.keys(rawSelectedClasses).filter((cls) => rawSelectedClasses[cls]);

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-GB")
      : new Date().toLocaleDateString();

  return (
    <>
      {showPreview && (
        <div className="px-[1rem] py-[1.5rem] bg-white rounded-[10px] w-1/3">
          <div className="flex items-center justify-between mb-[1rem]">
            <h1 className="text-[20px] text-black font-semibold">
              Report Review
            </h1>
            <p className="text-[14px] text-darkgray">
              Last Updated: <span>April 8, 2025</span>
            </p>
          </div>
          <div className="bg-background p-[1rem] rounded-[10px] border border-darkgray w-full mb-[1rem]">
            <div className="mb-[10px] flex items-center justify-between">
              <div>
                <p className="capitalize text-[20px] text-black font-semibold">
                  {selectedReport} Report
                </p>
                <p className="text-[14px] text-darkgray">
                  {formatDate(startDate)} to {formatDate(endDate)}
                </p>
              </div>
              <div>
                {selectedReport === "attendance" ? (
                  <span className="h-[2rem] w-[2rem] bg-blue text-lightblue flex items-center justify-center rounded-full">
                    <BsPersonCheck />
                  </span>
                ) : selectedReport === "performance" ? (
                  <span className="h-[2rem] w-[2rem] bg-green text-lightgreen flex items-center justify-center rounded-full">
                    <FaGraduationCap />
                  </span>
                ) : selectedReport === "financial" ? (
                  <span className="h-[2rem] w-[2rem] bg-orange text-lightorange flex items-center justify-center rounded-full">
                    <MdMoney />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <p className="mb-[5px] text-darkgray text-[14px]">
              Selected Classes:
            </p>
            <>
              {selectedClass.length ? (
                <div className="grid grid-cols-4 gap-[10px] w-full mb-[1rem]">
                  {selectedClass.map((classes) => (
                    <div className="bg-darkgray w-full rounded-[5px] text-center text-white text-[14px] ">
                      {classes}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="italic text-red text-[14px] ">No classes set</p>
              )}
            </>

            <div className="w-full h-[15rem]">
              {selectedReport === "attendance" && chartType === "bar" && (
                <AttendanceBarChart />
              )}
              {selectedReport === "performance" && chartType === "bar" && (
                <PerformanceBarChart />
              )}
              {selectedReport === "financial" && chartType === "bar" && (
                <FinancialBarChart />
              )}

              {selectedReport === "attendance" && chartType === "line" && (
                <AttendanceLineChart />
              )}
              {selectedReport === "performance" && chartType === "line" && (
                <PerformanceLineChart />
              )}
              {selectedReport === "financial" && chartType === "line" && (
                <FinancialLineChart />
              )}

              {selectedReport === "attendance" && chartType === "pie" && (
                <AttendancePieChart />
              )}
              {selectedReport === "performance" && chartType === "pie" && (
                <PerformancePieChart />
              )}
              {selectedReport === "financial" && chartType === "pie" && (
                <FinancialPieChart />
              )}
            </div>

            {notes.length ? (
              <div className="border-t border-darkgray py-[10px] text-[14px] text-darkgray">
                Notes: <p>{notes}</p>
              </div>
            ) : null}
          </div>
          <div className="border border-orange rounded-[5px] px-[1rem] py-[10px] bg-lightorange text-[#7a591b] text-[14px] mb-[1rem]">
            This is a preview. The final report may look different based on
            actual data.
          </div>
          <div>
            <h1 className="text-darkgray text-[15px] font-semibold mb-[10px]">
              Report Settings
            </h1>
            <div>
              <p className="text-[14px] text-darkgray font-bold">
                Report Type:{" "}
                <span className="text-[13px] font-normal">
                  {selectedReport}
                </span>
              </p>
              <p className="text-[14px] text-darkgray font-bold">
                Date Range:{" "}
                <span className="text-[13px] font-normal">
                  {formatDate(startDate)} to {formatDate(endDate)}
                </span>
              </p>
              <p className="text-[14px] text-darkgray font-bold">
                Classes:{" "}
                <span className="text-[13px] font-normal">
                  {selectedClass.length
                    ? selectedClass.join(", ")
                    : "None Selected"}
                </span>
              </p>
              <p className="text-[14px] text-darkgray font-bold">
                Chart:{" "}
                <span className="text-[13px] font-normal">{chartType}</span>
              </p>
              <p className="text-[14px] text-darkgray font-bold">
                Data Points:{" "}
                <span className="text-[13px] font-normal">
                  {dataPoints.length ? dataPoints.join(", ") : "None Selected"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportReview;
