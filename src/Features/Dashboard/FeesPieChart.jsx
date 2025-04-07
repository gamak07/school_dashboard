import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const FeesPieChart = () => {
  // Donut data
  const data = {
    labels: ["Paid", "Pending", "Overdue"],
    datasets: [
      {
        data: [70, 20, 10], 
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"], 
        borderWidth: 0, // No border lines
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    cutout: "70%", 
    className: 'hidden',
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true, 
          pointStyle: 'circle',
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default FeesPieChart;
