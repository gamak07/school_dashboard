import React from "react";
import { BsCreditCard, BsFillPersonPlusFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { LuChartBarIncreasing } from "react-icons/lu";
import { PiExamFill } from "react-icons/pi";

const QuickActions = () => {
  const actions = [
    {
      type: 'Add Student',
      icon: <BsFillPersonPlusFill />,
      className: 'text-blue bg-lightblue'
    },
    {
      type: 'Add Staff',
      icon: <GrUserManager />,
      className: 'text-green bg-lightgreen'
    },
    {
      type: 'Create Exam',
      icon: <PiExamFill />,
      className: 'text-orange bg-lightorange'
    },
    {
      type: 'Upload Results',
      icon: <LuChartBarIncreasing />,
      className: 'text-red bg-lightred'
    },
    {
      type: 'Schedule',
      icon: <FaCalendarAlt />,
      className: 'text-accent bg-secondary'
    },
    {
      type: 'Record Payment',
      icon: <BsCreditCard />,
      className: 'text-indigo bg-indigolight'
    },
  ]
  return (
    <div className="bg-white rounded-[10px] p-[1rem] w-1/3">
      <h1 className="text-black font-bold text-[20px]">Quick Actions</h1>
      
      <div className="mt-[1rem] grid grid-cols-2 gap-[1rem]">
        {actions.map(action =>(
          <div className={`flex flex-col justify-center items-center py-[1rem] rounded-[10px] gap-[5px] ${action.className}`}>
            <p className="font-bold text-[30px]">{action.icon}</p>
            <p className="text-black text-[15px]">{action.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
