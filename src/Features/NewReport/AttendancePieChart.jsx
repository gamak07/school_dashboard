import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendancePieChart = () => {
  // Example data: percentages for Present, Absent, Late (they sum to 100)
  const data = {
    labels: ["Present", "Absent", "Late"],
    datasets: [
      {
        label: "Attendance",
        data: [85, 10, 5],
        backgroundColor: ["#10B981", "#EF4444", "#F59E0B"], // green, red, orange
      },
    ],
  };

  // Options: legend at the bottom and title disabled.
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default AttendancePieChart;
