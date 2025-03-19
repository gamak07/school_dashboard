import React from "react";

const AttendanceOverview = () => {
  const attendanceData = [
    { label: "PRESENT", count: 4396, total: 5000, color: "#b0ed66" },
    { label: "LATE", count: 0, total: 5000, color: "#656564" },
    { label: "ABSENT", count: 609, total: 5000, color: "#e23219" },
    { label: "HALF DAY", count: 5, total: 5000, color: "#fcf50f" },
  ];

  return (
    <div className="bg-background mt-[1rem] w-[50%] rounded-[10px] p-[1rem]">
      <h2 className="text-lg font-semibold mb-4">Student Attendance</h2>
      {attendanceData.map(({ label, count, total, color }) => {
        const percentage = ((count / total) * 100).toFixed(2);
        return (
          <div key={label} className="mb-4">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-text text-[15px] font-bold">{label}</span>
              <span className="text-text text-[15px] font-bold">{percentage}%</span>
            </div>
            <p className="text-gray-600 text-xs">{count} out of {total}</p>
            <div className="w-full bg-[#9c9e9a] h-[5px] rounded-full">
              <div
                className={`h-full rounded-full`}
                style={{ width: `${percentage}%`, backgroundColor: color }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceOverview;
