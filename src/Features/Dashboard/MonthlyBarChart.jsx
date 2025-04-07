import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyBarChart = () => {
  // X-axis labels (each "group" on the chart)
  const labels = ['First Term', 'Second Term', 'Third Term'];

  // Chart Data
  const data = {
    labels,
    datasets: [
      {
        label: 'Math',
        data: [84, 81, 92],
        backgroundColor: '#3b82f6', // Blue
        // borderRadius: 5,
      },
      {
        label: 'English',
        data: [83, 79, 80],
        backgroundColor: '#10b981', // Green
        // borderRadius: 5,
      },
      {
        label: 'Science',
        data: [79, 82, 83],
        backgroundColor: '#f59e0b', // Orange
        // borderRadius: 5,
      },
      {
        label: 'Arts',
        data: [80, 80, 71],
        backgroundColor: '#ef4444', // Red
        // borderRadius: 5,
      },
      {
        label: 'Commercial',
        data: [65, 67, 57],
        backgroundColor: '#4e08cb', // Red
        // borderRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Moves the legend below the chart
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // If your scores are out of 100
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MonthlyBarChart;
