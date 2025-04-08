import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialPieChart = () => {
  // Example data: portions of total financial figures
  const data = {
    labels: ["Income", "Expenses", "Profit"],
    datasets: [
      {
        label: "Financial Breakdown",
        data: [60, 30, 10],
        backgroundColor: ["#10B981", "#EF4444", "#3B82F6"], // green, red, indigo
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
  };

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default FinancialPieChart;
