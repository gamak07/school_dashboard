import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the needed components with ChartJS.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const FinancialLineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Profit ($)",
        data: [3000, 4000, 3500, 4500],
        fill: false,
        borderColor: "#3b82f6", // Indigo
        tension: 0.3,
        pointBackgroundColor: "#3b82f6",
      },
    ],
  };

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
    scales: {
      y: {
        beginAtZero: true,
        // Adjust max and stepSize as needed for your data
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default FinancialLineChart;
