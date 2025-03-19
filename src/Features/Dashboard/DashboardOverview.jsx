import React from "react";
import { GiCash, GiTeacher } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdCoPresent } from "react-icons/md";
import { PiNotebookBold, PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";

const DashboardOverview = () => {
  const dashboard = [
    {
      title: "Students",
      figure: 987,
      icon: <PiStudentBold />,
    },
    {
      title: "Teachers",
      figure: 25,
      icon: <GiTeacher />,
    },
    {
      title: "Parents",
      figure: "411",
      icon: <RiParentFill />,
    },
    {
      title: "Staffs",
      figure: "15",
      icon: <GrUserWorker />,
    },
    {
      title: "Revenue",
      figure: 678096,
      icon: <GiCash />,
    },
    {
      title: "Subjects",
      figure: 31,
      icon: <PiNotebookBold />,
    },
    {
      title: "Teachers present today",
      figure: 950 + '/' +987,
      icon: <MdCoPresent />,
    },
    {
      title: "Students present today",
      figure: 25 + '/' + 25,
      icon: <MdCoPresent />,
    },
    {
      title: "Staffs present today",
      figure: 15 + '/' +15,
      icon: <MdCoPresent />,
    },
  ];
  return (
    <div className="bg-background p-[1rem] rounded-[10px] w-full">
      <h1 className="font-bold text-text mb-[1rem]">Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-[5px] w-full">
        {dashboard.map((data, i) => (
          <div key={i} className="w-[10rem] flex items-center justify-between bg-secondary p-[1rem] rounded-[8px]">
            <div>
              <p className="font-normal text-[12px]">{data.title}</p>
              <h1 className="font-bold text-[20px]">{data.figure}</h1>
            </div>
            <div>
                <span className="text-[2.5rem] text-accent">{data.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
