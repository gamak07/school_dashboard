import { useState } from "react";
import { BiBuildingHouse, BiCalendar } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import {
  PiChalkboardTeacherFill,
  PiExamFill,
  PiStudentFill,
} from "react-icons/pi";
import { TbReportAnalytics, TbSettings } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sideMenus = [
    {
      menuName: "Dashboard",
      menuLink: "/",
      menuIcon: <MdDashboard />,
    },
    {
      menuName: "Students",
      menuLink: "/students",
      menuIcon: <PiStudentFill />,
    },
    {
      menuName: "Staffs",
      menuLink: "/staffs",
      menuIcon: <PiChalkboardTeacherFill />,
    },
    {
      menuName: "Examinations",
      menuLink: "/examinations",
      menuIcon: <PiExamFill />,
    },
    {
      menuName: "Academics",
      menuLink: "/academics",
      menuIcon: <HiAcademicCap />,
    },
    {
      menuName: "Results",
      menuLink: "/results",
      menuIcon: <VscGraph />,
    },
    {
      menuName: "Timetable",
      menuLink: "/timetable",
      menuIcon: <BiCalendar />,
    },
    {
      menuName: "Finance",
      menuLink: "/finance",
      menuIcon: <FaMoneyBillWave />,
    },
    {
      menuName: "Reports",
      menuLink: "/reports",
      menuIcon: <TbReportAnalytics />,
    },
    {
      menuName: "Facilties",
      menuLink: "/facilities",
      menuIcon: <BiBuildingHouse />,
    },
    {
      menuName: "Settings",
      menuLink: "/settings",
      menuIcon: <TbSettings />,
    },
  ];

  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const handleCollapseToggle = () => {
    setCollapseSidebar((prev) => !prev);
  };
  return (
    <div className="relative flex flex-col gap-[1rem] h-screen py-[1rem] bg-primary overflow-y-auto">
      <span
        className="absolute right-[0] text-secondary font-bold text-[20px]"
        onClick={handleCollapseToggle}
      >
        {collapseSidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </span>
      <div
        className={
          collapseSidebar
            ? "w-[1rem] aspect-square flex self-center"
            : "w-[5rem] aspect-square flex self-center"
        }
      >
        <img src="/logo.webp" alt="logo" className="w-full h-full" />
      </div>
      <ul className="flex flex-col gap-[5px] w-full border-t border-darkgray py-[1rem] px-[10px]">
        {sideMenus.map((sidemenu) => (
          <li key={sidemenu.menuName} className="w-full">
            <NavLink
              to={sidemenu.menuLink}
              className={({ isActive }) =>
                `hover:bg-secondary flex items-center gap-[5px] w-full py-[5px] pl-[1rem] pr-[2rem] rounded-[5px] transition-all text-[15px] font-bold text-white ${
                  isActive ? "bg-secondary" : ""
                }`
              }
            >
              {collapseSidebar ? (
                <span>{sidemenu.menuIcon}</span>
              ) : (
                <>
                  <span>{sidemenu.menuIcon}</span>
                  <p>{sidemenu.menuName}</p>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
