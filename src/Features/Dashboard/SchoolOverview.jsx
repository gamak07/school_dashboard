import React from "react";
import { FaUserFriends } from "react-icons/fa";

const facultyList = [
  { id: 1, role: "Admin", count: 3 },
  { id: 2, role: "Teachers", count: 80 },
  { id: 3, role: "Accountant", count: 1 },
  { id: 4, role: "Librarian", count: 2 },
  { id: 5, role: "Receptionist", count: 3 },
  { id: 5, role: "Janitors", count: 8 },
  { id: 5, role: "Security", count: 3 },
];

const SchoolOverview = () => {
  return (
    <div className="bg-background p-[1rem] mt-[1rem] rounded-[10px]">
      <h2 className="font-bold mb-[1rem]">Staff Overview</h2>
      <div className="">
        {facultyList.map((faculty) => (
          <div key={faculty.id} className="flex justify-between items-center p-[5px] border border-lightgray rounded-[10px]">
            <div className="flex items-center gap-[6px]">
              <FaUserFriends className="w-[1rem] h-[1rem] text-accent" />
              <span className="font-semibold">{faculty.role}</span>
            </div>
            <span className="font-semibold text-gray-700">{faculty.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolOverview;
