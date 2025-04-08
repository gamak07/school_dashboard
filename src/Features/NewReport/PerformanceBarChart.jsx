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

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceBarChart = () => {
  // Labels can represent time periods like Terms or Semesters
  const labels = ["Term 1", "Term 2", "Term 3"];

  // Example datasets representing performance in various subjects
  const data = {
    labels,
    datasets: [
      {
        label: "Math",
        data: [85, 90, 88],
        backgroundColor: "#2563eb", // Indigo color
        borderRadius: 5,
      },
      {
        label: "English",
        data: [82, 87, 84],
        backgroundColor: "#16a34a", // Green color
        borderRadius: 5,
      },
      {
        label: "Science",
        data: [80, 85, 83],
        backgroundColor: "#f59e0b", // Orange color
        borderRadius: 5,
      },
      {
        label: "Commercial",
        data: [78, 80, 82],
        backgroundColor: "#ef4444", // Red color
        borderRadius: 5,
      },
    ],
  };

  // Chart options to customize the appearance and behavior
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Legend placed at the top
      },
      title: {
        display: false,
        text: "Academic Performance Report",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Assuming scores are out of 100
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerformanceBarChart;
