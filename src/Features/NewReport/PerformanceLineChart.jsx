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

const PerformanceLineChart = () => {
  const data = {
    labels: ["Term 1", "Term 2", "Term 3"],
    datasets: [
      {
        label: "Math",
        data: [85, 88, 90],
        fill: false,
        borderColor: "#2563eb", // Indigo
        tension: 0.3,
        pointBackgroundColor: "#2563eb",
      },
      {
        label: "English",
        data: [80, 82, 85],
        fill: false,
        borderColor: "#16a34a", // Green
        tension: 0.3,
        pointBackgroundColor: "#16a34a",
      },
      {
        label: "Science",
        data: [78, 80, 83],
        fill: false,
        borderColor: "#f59e0b", // Orange
        tension: 0.3,
        pointBackgroundColor: "#f59e0b",
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
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceLineChart;
