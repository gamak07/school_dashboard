import React from "react";
import Button from "../../Components/Button";
import { FaDownload } from "react-icons/fa6";
import FeesPieChart from "./FeesPieChart";

const FeesCollection = () => {
  return (
    <div className="bg-white shadow-md w-1/3 p-[1rem] rounded-[10px]">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-[20px] font-bold">Fees Collection</h1>
        <Button className='flex items-center gap-[5px] text-[15px] text-indigo hover:text-indigolight'>
          <span><FaDownload /></span>
          Export
        </Button>
      </div>
      <div>
        <FeesPieChart />
      </div>
    </div>
  );
};

export default FeesCollection;
