import React, { useState } from "react";
import { FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DatePicker from "react-datepicker"; // If using react-datepicker
import "react-datepicker/dist/react-datepicker.css";

const ApplicationsReceived = () => {
  // Dummy data for demonstration
  const [applications, setApplications] = useState([
    {
      id: "APPL-001",
      applicantName: "John Doe",
      grade: "Grade 6",
      parentName: "Jane Doe",
      date: "2025-03-01",
      status: "Pending",
    },
    {
      id: "APPL-002",
      applicantName: "Mary Smith",
      grade: "Grade 7",
      parentName: "Robert Smith",
      date: "2025-03-02",
      status: "Approved",
    },
    {
      id: "APPL-003",
      applicantName: "Alex Johnson",
      grade: "Grade 6",
      parentName: "Nancy Johnson",
      date: "2025-03-05",
      status: "Rejected",
    },
    // ... more data
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [sessionFilter, setSessionFilter] = useState("2025-2026");
  const [batchFilter, setBatchFilter] = useState("All");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter logic (basic)
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : app.status === statusFilter;

    const matchesGrade =
      gradeFilter === "All" ? true : app.grade === gradeFilter;

    // For date filtering, convert to Date objects if needed
    const appDate = new Date(app.date);
    const validStart = startDate ? new Date(startDate) <= appDate : true;
    const validEnd = endDate ? new Date(endDate) >= appDate : true;

    return (
      matchesSearch && matchesStatus && matchesGrade && validStart && validEnd
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedData = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Summary Stats
  const totalApplications = applications.length;
  const totalPending = applications.filter(
    (a) => a.status === "Pending"
  ).length;
  const totalApproved = applications.filter(
    (a) => a.status === "Approved"
  ).length;
  const totalRejected = applications.filter(
    (a) => a.status === "Rejected"
  ).length;

  return (
    <div className="bg-primary p-[1rem]">
      {/* Page Header & Breadcrumbs */}
      <div className="bg-background p-[1rem] rounded-[10px]">
        <h1 className="text-[20px] font-semibold">Applications Received</h1>
        <p className="text-darkgray text-[15px]">
          Admissions &gt; Applications Received
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <div className="flex items-center gap-x-[4px]">
          <FaFilter className="text-darkgray" />
          <span className="font-semibold text-darkgray">
            Filter Applications to View
          </span>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[1rem]">
          {/* Session Filter */}
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Admission Session
            </label>
            <select
              className="w-full border-lightgray border-2 rounded-[10px] outline-0"
              value={sessionFilter}
              onChange={(e) => setSessionFilter(e.target.value)}
            >
              <option value="2025-2026">2025-2026</option>
              <option value="2024-2025">2024-2025</option>
            </select>
          </div>

          {/* Grade Filter */}
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Class Option
            </label>
            <select
              className="w-full border-lightgray border-2 rounded-[10px] outline-0"
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Application Status
            </label>
            <select
              className="w-full border-lightgray border-2 rounded-[10px] outline-0"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Batch Filter */}
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Application Batch / Cohort
            </label>
            <select
              className="w-full border-lightgray border-2 rounded-[10px] outline-0"
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Batch A">Batch A</option>
              <option value="Batch B">Batch B</option>
            </select>
          </div>

          {/* Date Range Filters */}
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Applied Between (Start)
            </label>

            {/* If using react-datepicker: */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border-lightgray border-2 px-[2px] rounded-[10px] outline-0"
            />
          </div>
          <div>
            <label className="block text-[15px] font-medium text-darkgray mb-[1rem]">
              Applied Between (End)
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border-lightgray border-2 px-[2px] rounded-[10px] outline-0"
            />
          </div>

          {/* View Button */}
          <div className="flex items-end">
            <button
              onClick={() => console.log("Filter results")}
              className="bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent transition"
            >
              View Admission Applications
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-[1rem]">
        <div className="bg-background p-[1rem] rounded-[10px] text-center">
          <p className="text-[15px] text-darkgray">Total Applications</p>
          <p className="text-[20px] font-bold">{totalApplications}</p>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] text-center">
          <p className="text-[15px] text-darkgray">Pending</p>
          <p className="text-[20px] font-bold">{totalPending}</p>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] text-center">
          <p className="text-[15px] text-darkgray">Approved</p>
          <p className="text-[20px] font-bold">{totalApproved}</p>
        </div>
        <div className="bg-background p-[1rem] rounded-[10px] text-center">
          <p className="text-[15px] text-darkgray">Rejected</p>
          <p className="text-[20px] font-bold">{totalRejected}</p>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-background p-[1rem] mt-[1rem] rounded-[10px]">

        <div className="md:col-span-2 lg:col-span-1 flex items-end">
          <div className="px-[3px] py-[2px] mb-[1rem] flex gap-[4px] w-full items-center border border-lightgray rounded-[10px]">
            <span className="text-darkgray">
              <FaSearch />
            </span>
            <input
              type="text"
              className="w-full focus:outline-none px-2 py-1"
              placeholder="Search by name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <table className="min-w-full table-auto">
          <thead className="border-b border-lightgray">
            <tr className="text-left">
              <th className="py-[2px] px-[2px]">Applicant Name</th>
              <th className="py-[2px] px-[2px]">Application ID</th>
              <th className="py-[2px] px-[2px]">Grade</th>
              <th className="py-[2px] px-[2px]">Parent Name</th>
              <th className="py-[2px] px-[2px]">Application Date</th>
              <th className="py-[2px] px-[2px]">Status</th>
              <th className="py-[2px] px-[2px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((app) => (
              <tr
                key={app.id}
                className="border-b  border-lightgray hover:bg-darkgray"
              >
                <td className="py-[2px] px-[2px]">{app.applicantName}</td>
                <td className="py-[2px] px-[2px]">{app.id}</td>
                <td className="py-[2px] px-[2px]">{app.grade}</td>
                <td className="py-[2px] px-[2px]">{app.parentName}</td>
                <td className="py-[2px] px-[2px]">{app.date}</td>
                <td className="py-[2px] px-[2px]">
                  <span
                    className={`px-[3px] py-[2px] rounded-full text-background text-[15px] ${
                      app.status === "Pending"
                        ? "bg-orange"
                        : app.status === "Approved"
                        ? "bg-green"
                        : "bg-red"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-[3px] px-[2px] flex gap-x-[2px]">
                  <button className="text-orange hover:underline">View</button>
                  <button className="text-green hover:underline">
                    Approve
                  </button>
                  <button className="text-red hover:underline">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex items-center justify-end gap-x-[2px] mt-[1rem]">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-[4px] py-[3px] border border-lightgray rounded-[10px] disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-[4px] py-[3px] border border-lightgray rounded-[10px] disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsReceived;
