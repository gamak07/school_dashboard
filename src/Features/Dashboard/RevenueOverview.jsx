import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueOverview = () => {
  const [session, setSession] = useState("2024-25");
  const [month, setMonth] = useState("All Months");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Fee Collection",
        data: [3000, 800, 1200, 1800, 2200, 500, 1600, 1900, 600, 400, 350, 500],
        backgroundColor: "#00C853",
      },
      {
        label: "Expenses",
        data: [500, 400, 900, 1300, 800, 300, 1400, 1000, 450, 300, 250, 400],
        backgroundColor: "#D50000",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mt-[1rem] p-[1rem] bg-background shadow-lg rounded-[10px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Fee Collection and Expenses</h2>
        <div className="flex gap-[1rem]">
          <select
            className="border border-lightgray bg-accent text-background px-2 py-1 rounded-[10px]"
            value={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option>2024-25</option>
            <option>2023-24</option>
          </select>
          <select
            className="border border-lightgray bg-accent text-background px-2 py-1 rounded-[10px]"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option>All Months</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueOverview;
