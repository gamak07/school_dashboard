import React from "react";
import Button from "../../Components/Button";
import { FaPlus } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaArrowDownLong } from "react-icons/fa6";
import { formatCurrency } from "../../helpers/formatCurrency";

const ReportStats = () => {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatted = today.toLocaleDateString(undefined, options);

  return (
    <div className="mt-[1rem]">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-[25px] font-bold">Dashboard Overview</h1>
        <div className="flex items-center gap-[10px]">
          <p className="text-darkgray">{formatted}</p>
          <Button className="flex items-center px-[16px] py-[10px] rounded-[5px] text-white bg-secondary hover:bg-accent">
            <span className="text-white">
              <FaPlus />
            </span>
            New Report
          </Button>
        </div>
      </div>

      {/* stats */}

      <div className="grid grid-cols-4 gap-[1rem] mt-[2rem]">
        <div className="flex bg-white rounded-[10px] shadow-md h-[10rem] border-l-5 border-blue py-[1rem] px-[10px]">
          <div>
            <p className="text-darkgray text-[15px]">Total Students</p>
            <h1 className="text-black font-bold text-[25px]">1345</h1>
            <p className="flex items-center gap-[3px] text-accent">
              <span>
                <FaArrowDownLong />
              </span>
              4.5% increase from last month
            </p>
          </div>
          <div className="h-[3rem] w-[3rem] flex items-center justify-center bg-lightblue rounded-full text-blue text-[20px]">
            <PiStudentFill />
          </div>
        </div>

        <div className="flex bg-white rounded-[10px] shadow-md h-[10rem] border-l-5 border-green py-[1rem] px-[10px]">
          <div>
            <p className="text-darkgray text-[15px]">Total Staffs</p>
            <h1 className="text-black font-bold text-[25px]">70</h1>
            <p className="flex items-center gap-[3px] text-accent">
              <span>
                <FaArrowDownLong />
              </span>
              4.5% increase from last month
            </p>
          </div>
          <div className="h-[3rem] w-[3rem] flex items-center justify-center bg-lightgreen rounded-full text-green text-[20px]">
            <PiStudentFill />
          </div>
        </div>

        <div className="flex bg-white rounded-[10px] shadow-md h-[10rem] border-l-5 border-orange py-[1rem] px-[10px]">
          <div>
            <p className="text-darkgray text-[15px]">Fees Collected</p>
            <h1 className="text-black font-bold text-[25px]">{formatCurrency(456345)}</h1>
            <p className="flex items-center gap-[3px] text-orange">
              <span>
                <FaArrowDownLong />
              </span>
              4.5% increase from last month
            </p>
          </div>
          <div className="h-[3rem] w-[3rem] flex items-center justify-center bg-lightorange rounded-full text-orange text-[20px]">
            <PiStudentFill />
          </div>
        </div>

        <div className="flex bg-white rounded-[10px] shadow-md h-[10rem] border-l-5 border-indigo py-[1rem] px-[10px]">
          <div>
            <p className="text-darkgray text-[15px]">Attendance Rate</p>
            <h1 className="text-black font-bold text-[25px]">91%</h1>
            <p className="flex items-center gap-[3px] text-red">
              <span>
                <FaArrowDownLong />
              </span>
              4.5% increase from last month
            </p>
          </div>
          <div className="h-[3rem] w-[3rem] flex items-center justify-center bg-indigolight rounded-full text-indigo text-[20px]">
            <PiStudentFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportStats;
