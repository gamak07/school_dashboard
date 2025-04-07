import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AttendanceLineChart = () => {
  // Create a ref to the chart so we can access the context for a gradient fill
  const chartRef = useRef(null);

  // Data labels on the x-axis
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  // Hard-coded example data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Score",
        data: [80, 78, 90, 85, 88],
        tension: 0.4, // This makes the line smooth
        borderColor: "#3b82f6", // Tailwind Indigo-500
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointRadius: 5,
        fill: true, // Enable fill under the line
        // backgroundColor will be assigned after we create the gradient in useEffect
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Let the parent container control the height
    plugins: {
      legend: {
        display: false, // Hide legend if you just want the line
      },
      title: {
        display: false,
        text: "Weekly Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: true, // Hide vertical grid lines
        },
      },
    },
  };

  // Create the gradient fill once the chart is mounted
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const chartInstance = chart.chartInstance || chart;
    const ctx = chartInstance.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(59,130,246, 0.4)"); // #3b82f6 with alpha
    gradient.addColorStop(1, "rgba(59,130,246, 0)");   // fade to transparent

    // Update the dataset background color with the gradient
    chartData.datasets[0].pointBackgroundColor = gradient;
    chartInstance.update();
  }, []);

  return (
    <div className="">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default AttendanceLineChart;
