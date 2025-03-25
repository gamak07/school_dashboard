import React from "react";
import {
  FaPlusCircle,
  FaEdit,
  FaTrash,
  FaChartBar,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
import { BiTimeFive, BiCheckCircle, BiXCircle } from "react-icons/bi";

const EntranceExamination = () => {
  // Dummy data for demonstration purposes
  const examMetrics = {
    totalApplicants: 120,
    upcomingExams: 3,
    completedExams: 5,
    pendingResults: 2,
    passRate: 78,
  };

  const exams = [
    {
      id: 1,
      title: "Math Entrance Exam",
      date: "2025-04-01 10:00",
      type: "Online",
      registrationStatus: "Open",
    },
    {
      id: 2,
      title: "Science Entrance Exam",
      date: "2025-04-05 14:00",
      type: "In-Person",
      registrationStatus: "Closed",
    },
    // ... more exam objects
  ];

  const applicants = [
    {
      id: 1,
      name: "John Doe",
      applicationNumber: "A001",
      status: "Pending",
      score: "N/A",
    },
    {
      id: 2,
      name: "Jane Smith",
      applicationNumber: "A002",
      status: "Approved",
      score: 85,
    },
    // ... more applicant objects
  ];

  return (
    <div className="bg-primary p-[1rem] min-h-screen">
      {/* Header Section */}
      <header className="bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">
            Entrance Examination Management
          </h1>
          <div className="flex gap-x-[4px] mt-[5px] sm:mt-[0px]">
            <button className="flex items-center bg-accent text-background px-[8px] py-[5px] rounded-[10px]">
              <FaPlusCircle className="mr-[2px]" />
              Add New Exam
            </button>
            <button className="flex items-center bg-accent text-background px-[8px] py-[5px] rounded-[10px]">
              <FaFileAlt className="mr-[2px]" />
              Generate Reports
            </button>
          </div>
        </div>
      </header>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[1rem] mt-[1rem]">
        <div className="bg-background p-[1rem] rounded-[10px] flex flex-col items-center">
          <FaChartBar className="text-[30px] text-accent mb-[1rem]" />
          <span className="text-[20px] font-semibold">
            {examMetrics.totalApplicants}
          </span>
          <span className="text-darkgray">Applicants</span>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] flex flex-col items-center">
          <BiTimeFive className="text-[30px] text-accent mb-[1rem]" />
          <span className="text-[20px] font-semibold">
            {examMetrics.upcomingExams}
          </span>
          <span className="text-darkgray">Upcoming Exams</span>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] flex flex-col items-center">
          <BiCheckCircle className="text-[30px] text-accent mb-[1rem]" />
          <span className="text-[20px] font-semibold">
            {examMetrics.completedExams}
          </span>
          <span className="text-darkgray">Completed Exams</span>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] flex flex-col items-center">
          <BiXCircle className="text-[30px] text-accent mb-[1rem]" />
          <span className="text-[20px] font-semibold">
            {examMetrics.pendingResults}
          </span>
          <span className="text-darkgray">Pending Results</span>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] flex flex-col items-center">
          <FaChartBar className="text-[30px] text-accent mb-[1rem]" />
          <span className="text-[20px] font-semibold">
            {examMetrics.passRate}%
          </span>
          <span className="text-darkgray">Pass Rate</span>
        </div>
      </section>

      {/* Exam Schedule & Management */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <div className="flex justify-between items-center mb-[1rem]">
          <h2 className="text-[20px] font-bold">Exam Schedule & Management</h2>
          <div className="border border-lightgray rounded-[10px] py-[4px] px-[8px] flex items-center gap-[5px]">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search exams..."
              className="outline-none"
            />
          </div>
        </div>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th className="py-[2px] text-left">Exam Title</th>
              <th className="py-[2px] text-left">Date & Time</th>
              <th className="py-[2px] text-left">Exam Type</th>
              <th className="py-[2px] text-left">Registration Status</th>
              <th className="py-[2px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td className="py-[2px]">{exam.title}</td>
                <td className="py-[2px]">{exam.date}</td>
                <td className="py-[2px]">{exam.type}</td>
                <td className="py-[2px]">
                  {exam.registrationStatus === "Open" ? (
                    <span className="text-green">Open</span>
                  ) : (
                    <span className="text-red">Closed</span>
                  )}
                </td>
                <td className="py-[2px] flex gap-x-[2px]">
                  <button className="text-orange">
                    <FaEdit />
                  </button>
                  <button className="text-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Student Applications */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <h2 className="text-[20px] font-bold mb-[1rem]">
          Student Applications
        </h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th className="py-[2px] text-left">Student Name</th>
              <th className="py-[2px] text-left">Application No.</th>
              <th className="py-[2px] text-left">Status</th>
              <th className="py-[2px] text-left">Score/Result</th>
              <th className="py-[2px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td className="py-[2px]">{applicant.name}</td>
                <td className="py-[2px]">{applicant.applicationNumber}</td>
                <td className="py-[2px]">
                  {applicant.status === "Approved" && (
                    <span className="text-green">Approved</span>
                  )}
                  {applicant.status === "Pending" && (
                    <span className="text-orange">Pending</span>
                  )}
                  {applicant.status === "Rejected" && (
                    <span className="text-red">Rejected</span>
                  )}
                </td>
                <td className="py-[2px]">{applicant.score}</td>
                <td className="py-[2px] flex gap-x-[2px]">
                  <button className="text-blue">
                    <FaSearch />
                  </button>
                  <button className="text-blue">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Exam Result Management */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <h2 className="text-[20px] font-bold mb-[1rem]">
          Exam Result Management
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-y-[4px] sm:gap-y-[0]">
          <div>
            <button className="bg-primary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent mr-[4px]">
              Upload Results
            </button>
            <button className="bg-primary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent">
              Export Data
            </button>
          </div>
          <div className="flex gap-x-2">
            <select className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none">
              <option>Filter by Exam</option>
              {/* Options */}
            </select>
            <select className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none">
              <option>Score Range</option>
              {/* Options */}
            </select>
            <select className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none">
              <option>Result Status</option>
              {/* Options */}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntranceExamination;
