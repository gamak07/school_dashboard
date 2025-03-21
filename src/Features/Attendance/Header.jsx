import React from "react";
import { NavLink } from "react-router-dom";
import TeachersAttendanceStats from "./TeachersAttendanceStats";

const Header = () => {
  const tabs = [
    {
      name: "Teachers",
      link: "/attendance/teachers",
    },
    {
      name: "Students",
      link: "/attendance/students",
    },
    {
      name: "Staffs",
      link: "/attendance/staffs",
    },
  ];
  return (
    <div className="bg-background flex flex-col justify-center">
      <ul className="flex items-center justify-center gap-[4px] border-b border-lightgray pb-[1rem]">
        {tabs.map(({ name, link }) => (
          <li key={name}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `border-2 font-bold border-darkgray rounded-full py-[3.5px] px-[15px] ${
                  isActive ? "bg-accent text-background" : ""
                }`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
