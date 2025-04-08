import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useReportContext } from "../../context/ReportContext";

const Header = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useReportContext();
  return (
    <div className="bg-white shadow-md flex items-center justify-between p-[2rem] h-[10vh]">
      <div className="flex items-center gap-[1rem]">
        <p
          className="flex items-center gap-[5px] text-[17px] text-darkgray hover:text-blue"
          onClick={() => navigate(-1)}
        >
          <span className=" text-[20px]">
            <HiArrowLeft />
          </span>
          Back to dashboard
        </p>
        <h1 className="text-black font-bold text-[20px]">Create New Report</h1>
      </div>
      <div className="flex items-center gap-[1rem]">
        <Button className="py-[10px] px-[1rem] border border-darkgray rounded-[5px] text-darkgray hover:bg-lightgray">
          Save Draft
        </Button>
        <Button
          className="py-[10px] px-[1rem] border border-blue rounded-[5px] text-blue hover:bg-lightblue"
          onClick={() => dispatch({ type: "toggle_preview", payload: !state.showPreview })}
        >
          {state.showPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </div>
    </div>
  );
};

export default Header;
