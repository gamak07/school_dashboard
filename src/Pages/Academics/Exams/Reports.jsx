import React, { useState } from "react";
import { FaChartBar, FaDownload, FaFileAlt } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const initialReports = [
  { id: 1, term: "First Term", subject: "Mathematics", averageScore: 75, highestScore: 98, passRate: 85 },
  { id: 2, term: "First Term", subject: "English", averageScore: 68, highestScore: 90, passRate: 80 },
  { id: 3, term: "Second Term", subject: "Science", averageScore: 72, highestScore: 95, passRate: 88 },
];

const Reports = () => {
  const [selectedSession, setSelectedSession] = useState("2024/2025");
  const [selectedTerm, setSelectedTerm] = useState("First Term");

  const filteredReports = initialReports.filter((report) => report.term === selectedTerm);

  const chartData = {
    labels: filteredReports.map((report) => report.subject),
    datasets: [
      {
        label: "Average Score",
        data: filteredReports.map((report) => report.averageScore),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      <div className="mx-auto bg-background p-[1rem] rounded-[10px]">
        <div className="flex items-center justify-between mb-[1rem] p-[1rem] border-b border-lightgray">
          <h1 className="text-[30px] font-bold text-darkgray flex items-center gap-[3px]">
            <FaFileAlt className="text-green" /> Exam Reports
          </h1>
          <button className="flex items-center px-[8px] py-[5px] bg-secondary text-background rounded-[10px] hover:bg-accent">
            <FaDownload className="mr-2" /> Export Reports
          </button>
        </div>

        <div className="flex gap-[5px] mb-[1rem]">
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-1/2 px-[8px] py-[5px] border-2 border-lightgray rounded-[10px]"
          >
            <option value="2024/2025">2024/2025</option>
            <option value="2023/2024">2023/2024</option>
          </select>
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="w-1/2 px-[8px] py-[5px] border-2 border-lightgray rounded-[10px]"
          >
            <option value="First Term">First Term</option>
            <option value="Second Term">Second Term</option>
          </select>
        </div>

        <div className="bg-lightgray p-[1rem] rounded-[10px] mb-[1rem]">
          <Bar data={chartData} />
        </div>

        <div className="">
          <table className="min-w-full divide-y divide-lightgray">
            <thead className="bg-lightgray">
              <tr>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Subject</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Avg Score</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Highest Score</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Pass Rate (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-lightgray">
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-[6px] py-[4px] text-darkgray">{report.subject}</td>
                  <td className="px-[6px] py-[4px] text-darkgray">{report.averageScore}</td>
                  <td className="px-[6px] py-[4px] text-darkgray">{report.highestScore}</td>
                  <td className="px-[6px] py-[4px] text-darkgray">{report.passRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
