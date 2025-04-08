import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinancialBarChart = () => {
  // Define the labels (e.g. for four months)
  const labels = ["January", "February", "March", "April"];

  // Define the datasets:
  // - Income (green)
  // - Expenses (red)
  // - Profit (blue)
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [15000, 18000, 16000, 20000],
        backgroundColor: "#10B981", // Tailwind green
        borderRadius: 5,
      },
      {
        label: "Expenses",
        data: [12000, 14000, 13000, 17000],
        backgroundColor: "#EF4444", // Tailwind red
        borderRadius: 5,
      },
      {
        label: "Profit",
        data: [3000, 4000, 3000, 3000],
        backgroundColor: "#3B82F6", // Tailwind indigo
        borderRadius: 5,
      },
    ],
  };

  // Chart options for appearance and behavior
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Legend on top
      },
      title: {
        display: false,
        text: "Financial Report",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // You can adjust additional scale properties as needed
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinancialBarChart;
