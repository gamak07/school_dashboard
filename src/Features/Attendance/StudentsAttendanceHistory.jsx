import { useState } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const StudentsAttendanceHistory = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("2025-02-10");

  const employees = [
    {
      id: "#E120",
      name: "John Doe",
      department: "Information Technology",
      clockIn: "08:15 AM",
      clockOut: "05:00 PM",
      status: "Present",
    },
    {
      id: "#E119",
      name: "Sarah Lee",
      department: "Human Resource",
      clockIn: "09:05 AM",
      clockOut: "05:00 PM",
      status: "Late",
    },
    {
      id: "#E118",
      name: "Michael Tan",
      department: "Marketing",
      clockIn: "08:50 AM",
      clockOut: "05:00 PM",
      status: "Present",
    },
    {
      id: "#E117",
      name: "Alice Morgan",
      department: "Finance",
      clockIn: "08:45 AM",
      clockOut: "05:00 PM",
      status: "Present",
    },
    {
      id: "#E116",
      name: "James Carter",
      department: "Information Technology",
      clockIn: "-",
      clockOut: "-",
      status: "Absent",
    },
    {
      id: "#E115",
      name: "Emma Brown",
      department: "Marketing",
      clockIn: "08:30 AM",
      clockOut: "05:05 PM",
      status: "Present",
    },
    {
      id: "#E114",
      name: "David Bowen",
      department: "Human Resource",
      clockIn: "-",
      clockOut: "-",
      status: "Absent",
    },
    {
      id: "#E113",
      name: "Rachel Amanda",
      department: "Marketing",
      clockIn: "08:45 AM",
      clockOut: "05:10 PM",
      status: "Present",
    },
    {
      id: "#E112",
      name: "Chris Johnson",
      department: "Operations",
      clockIn: "09:00 AM",
      clockOut: "05:30 PM",
      status: "Present",
    },
  ];

  return (
    <div className="p-[1rem] bg-background mt-[1rem] rounded-[10px]">
      <div className="flex items-center justify-between mb-[1rem]">
        <h2 className="font-bold">Attendance History</h2>
        <button className="flex items-center gap-[4px] bg-primary text-white px-[8px] py-[10px] rounded-[10px]">
          <FaDownload /> Download data
        </button>
      </div>
      <div className="flex gap-[4px] mb-[1rem]">
        <select
          className="border p-[4px] rounded-[5px] outline-0"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select department</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Human Resource">Human Resource</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
        </select>
        <input
          type="date"
          className="border p-[4px] rounded-[5px]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="border p-[4px] rounded-[5px] w-full pl-[10px] flex items-center gap-[5px]">
          <FaSearch className="text-darkgray" />
          <input
            type="text"
            className="outline-0"
            placeholder="Search employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <table className="w-full border-collapse rounded-[10px]">
        <thead>
          <tr className="bg-darkgray">
            <th className="p-[8px] text-left"># ID</th>
            <th className="p-[8px] text-left">Name</th>
            <th className="p-[8px] text-left">Department</th>
            <th className="p-[8px] text-left">Clock-in</th>
            <th className="p-[8px] text-left">Clock-out</th>
            <th className="p-[8px] text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index} className="border-b">
              <td className="p-[8px]">{emp.id}</td>
              <td className="p-[8px] flex items-center gap-[4px]">
                <img
                  src={`https://i.pravatar.cc/30?img=${index + 1}`}
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                {emp.name}
              </td>
              <td className="p-[8px]">{emp.department}</td>
              <td className="p-[8px]">{emp.clockIn}</td>
              <td className="p-[8px]">{emp.clockOut}</td>
              <td className="p-[8px]">
                <span
                  className={`px-[8px] py-[3px] rounded-[10px] text-background ${
                    emp.status === "Present"
                      ? "bg-green"
                      : emp.status === "Late"
                      ? "bg-orange"
                      : "bg-red"
                  }`}
                >
                  {emp.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsAttendanceHistory;
