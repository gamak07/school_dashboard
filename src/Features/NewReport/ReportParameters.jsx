import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../Components/Button";
import { FaDownload } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { useReportContext } from "../../context/ReportContext";

const ReportParameters = () => {
  const { state, dispatch } = useReportContext();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState({});

  const classes = [
    "Day Care",
    "Creche",
    "KG-1",
    "KG-2",
    "NUR-1",
    "NUR-2",
    "PRY-1",
    "PRY-2",
    "PRY-3",
    "PRY-4",
    "PRY-5",
    "PRY-6",
    "JSS-1",
    "JSS-2",
    "JSS-3",
    "SSS-1",
    "SSS-2",
    "SSS-3",
  ];

  const dataPointOptions = [
    "Daily",
    "Weekly",
    "Monthly",
    "Termly",
    "By Subject",
    "By Grade",
    "By Teacher",
  ];

  // Handler for individual checkbox change
  const handleCheckboxChange = (cls) => {
    setSelectedClasses((prev) => ({
      ...prev,
      [cls]: !prev[cls],
    }));
  };

  // Select All: set all classes to true
  const handleSelectAll = () => {
    const allSelected = {};
    classes.forEach((cls) => {
      allSelected[cls] = true;
    });
    setSelectedClasses(allSelected);
  };

  // Clear All: set all classes to false
  const handleClearAll = () => {
    const allCleared = {};
    classes.forEach((cls) => {
      allCleared[cls] = false;
    });
    setSelectedClasses(allCleared);
  };

  const handleDateChange = (date, which) => {
    dispatch({
      type: "update_params",
      payload: { [which]: date },
    });
  };

  const handleClassChange = (cls) => {
    const current = state.reportParams.selectedClasses || {};
    const updated = { ...current, [cls]: !current[cls] };
    dispatch({
      type: "update_params",
      payload: { selectedClasses: updated },
    });
  };

  const handleDataPointChange = (point) => {
    const current = state.reportParams.dataPoints || [];
    let updated;
    if (current.includes(point)) {
      updated = current.filter((p) => p !== point);
    } else {
      updated = [...current, point];
    }
    dispatch({
      type: "update_params",
      payload: { dataPoints: updated },
    });
  };

  const handleNotesChange = (e) => {
    dispatch({
      type: "update_params",
      payload: { notes: e.target.value },
    });
  };

  return (
    <div className="w-2/3">
      <div className="rounded-[10px] bg-white shadow-md p-[1.5rem] w-full">
        <h1 className="text-black font-bold text-[20px]">Report Parameters</h1>
        {/* date range */}
        <div className="w-full">
          <h2 className="text-[15px] text-darkgray font-semibold mt-[1rem]">
            Date Range
          </h2>
          <div className="flex gap-[1rem] mt-[1.5rem] w-full">
            <div className="flex flex-col gap-[5px] w-1/2">
              <label className="text-[13px] font-bold text-darkgray">
                Start Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => handleDateChange(date, "startDate")}
                minDate={new Date()}
                className="border border-lightgray rounded-[10px] py-[5px] px-[8px] focus:outline-blue w-full"
              />
            </div>
            <div className="flex flex-col gap-[5px] w-1/2">
              <label className="text-[13px] font-bold text-darkgray">
                End Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => handleDateChange(date, "endDate")}
                minDate={new Date()}
                className="border border-lightgray rounded-[10px] py-[5px] px-[8px] focus:outline-blue w-full"
              />
            </div>
          </div>
        </div>
        {/* classes */}

        <div>
          <div className="flex items-center justify-between mt-[1.5rem]">
            <h1 className="text-[15px] text-darkgray font-semibold">
              Classes/Grades
            </h1>
            <div className="flex items-center gap-[5px]">
              <Button
                className="text-[14px] hover:text-indigolight cursor-pointer"
                onClick={handleSelectAll}
              >
                Select All
              </Button>
              <Button
                className="text-[14px] hover:text-indigolight cursor-pointer"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6 mt-[1rem] gap-y-[5px]">
            {classes.map((cls, i) => (
              <div key={i} className="flex items-center gap-[3px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={state.reportParams.selectedClasses?.[cls] || false}
                  onChange={() => handleClassChange(cls)}
                />
                <label htmlFor="" className="text-[14px] text-darkgray">
                  {cls}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* chart type */}
        <div className="mt-[1.5rem]">
          <h1 className="text-[15px] text-darkgray font-semibold">
            Chart Type
          </h1>
          <div className="flex items-center gap-[1rem] mt-[1rem]">
            <div className="flex items-center gap-[5px]">
              <input
                checked={state.reportParams.chartType === "bar"}
                type="radio"
                name="chartType"
                id="bar-chart"
                value="bar"
                onChange={(e) =>
                  dispatch({
                    type: "update_params",
                    payload: { chartType: e.target.value },
                  })
                }
              />
              <label htmlFor="" className="text-[14px] text-darkgray">
                Bar Chart
              </label>
            </div>
            <div className="flex items-center gap-[5px]">
              <input
                checked={state.reportParams.chartType === "line"}
                type="radio"
                name="chartType"
                id="line-chart"
                value="line"
                onChange={(e) =>
                  dispatch({
                    type: "update_params",
                    payload: { chartType: e.target.value },
                  })
                }
              />
              <label htmlFor="" className="text-[14px] text-darkgray">
                Line Chart
              </label>
            </div>
            <div className="flex items-center gap-[5px]">
              <input
                checked={state.reportParams.chartType === "pie"}
                type="radio"
                name="chartType"
                id="pie-chart"
                value="pie"
                onChange={(e) =>
                  dispatch({
                    type: "update_params",
                    payload: { chartType: e.target.value },
                  })
                }
              />
              <label htmlFor="" className="text-[14px] text-darkgray">
                Pie Chart
              </label>
            </div>
          </div>
        </div>

        {/* data points */}
        <div className="mt-[1.5rem]">
          <h1 className="text-[15px] text-darkgray font-semibold">
            Data Points to Include
          </h1>
          <div className="grid grid-cols-4 mt-[1rem] gap-y-[5px]">
            {dataPointOptions.map((dp, i) => (
              <div key={i} className="flex items-center gap-[3px]">
                <input
                  type="checkbox"
                  checked={state.reportParams.dataPoints.includes(dp)}
                  onChange={() => handleDataPointChange(dp)}
                />
                <label className="text-[14px] text-darkgray">{dp}</label>
              </div>
            ))}
          </div>
        </div>

        {/* additional notes */}
        <div className="w-full mt-[1.5rem]">
          <h1 className="text-[15px] text-darkgray font-semibold">
            Additional Notes
          </h1>
          <div className="w-full mt-[1rem]">
            <textarea
              value={state.reportParams.notes}
              onChange={handleNotesChange}
              className="w-full h-[7rem] border border-lightgray rounded-[10px] outline-0 focus:outline-2 outline-blue p-[1rem]"
              placeholder="Add any additional information or context to this report ..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between my-[1.5rem]">
        <div>
          <Button className="py-[8px] px-[1rem] rounded-[5px] border border-darkgray">
            Cancel
          </Button>
        </div>
        <div className="flex items-center gap-[1rem]">
          <Button className="flex items-center gap-[10px] py-[8px] px-[1rem] rounded-[5px] border border-darkgray">
            <span>
              <FaDownload />
            </span>{" "}
            Download{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </Button>
          <Button className="flex items-center gap-[10px] py-[8px] px-[1rem] rounded-[5px] border border-darkgray">
            <span>
              <FaShareAlt />
            </span>{" "}
            Share{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </Button>
          <Button className="py-[8px] px-[1rem] rounded-[5px] bg-blue text-white text-[15px] font-semibold">
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportParameters;
