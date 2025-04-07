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

const WeeklyBarChart = () => {
  // X-axis labels (each "group" on the chart)
  const labels = ['First Term', 'Second Term', 'Third Term'];

  // Chart Data
  const data = {
    labels,
    datasets: [
      {
        label: 'Math',
        data: [85, 88, 90],
        backgroundColor: '#3b82f6', // Blue
        // borderRadius: 5,
      },
      {
        label: 'English',
        data: [82, 85, 88],
        backgroundColor: '#10b981', // Green
        // borderRadius: 5,
      },
      {
        label: 'Science',
        data: [80, 82, 85],
        backgroundColor: '#f59e0b', // Orange
        // borderRadius: 5,
      },
      {
        label: 'Arts',
        data: [85, 83, 87],
        backgroundColor: '#ef4444', // Red
        // borderRadius: 5,
      },
      {
        label: 'Commercial',
        data: [85, 83, 87],
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

export default WeeklyBarChart;
