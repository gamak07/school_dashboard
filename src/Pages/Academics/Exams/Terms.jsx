// Terms.jsx
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaChartBar,
} from "react-icons/fa";

const initialTerms = [
  { id: 1, session: "2024/2025", term: "First Term", status: "Active" },
  { id: 2, session: "2024/2025", term: "Second Term", status: "Upcoming" },
  { id: 3, session: "2023/2024", term: "Third Term", status: "Completed" },
];

const examReportsMock = {
  // Sample report data keyed by term id
  1: { avgScore: 78, highest: 95, lowest: 55, passRate: "85%" },
  2: { avgScore: 0, highest: 0, lowest: 0, passRate: "0%" }, // Upcoming term
  3: { avgScore: 82, highest: 98, lowest: 60, passRate: "90%" },
};

const Terms = () => {
  const [terms, setTerms] = useState(initialTerms);
  const [selectedSession, setSelectedSession] = useState("2024/2025");
  const [selectedTermId, setSelectedTermId] = useState(null);

  const handleEdit = (id) => {
    console.log(`Edit term with id ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    const updatedTerms = terms.filter((term) => term.id !== id);
    setTerms(updatedTerms);
    if (selectedTermId === id) setSelectedTermId(null);
  };

  const handleSetActive = (id) => {
    setTerms(
      terms.map((term) =>
        term.session === selectedSession
          ? term.id === id
            ? { ...term, status: "Active" }
            : { ...term, status: "Inactive" }
          : term
      )
    );
  };

  const filteredTerms = terms.filter(
    (term) => term.session === selectedSession
  );

  // Get exam report for the selected term, if available
  const selectedReport = selectedTermId
    ? examReportsMock[selectedTermId]
    : null;

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      {/* Page Header */}
      <div className="mx-auto bg-background p-[1rem] rounded-[10px]">
        <div className="flex items-center justify-between mb-[1rem] p-[1rem] border-b border-lightgray">
          <h1 className="text-[30px] font-bold text-darkgray flex items-center gap-[3px]">
            <FaCalendarAlt className="text-green" />
            Academic Term/Period Management
          </h1>
        </div>

        {/* Academic Session Selector */}
        <div className="mb-[1rem]">
          <label className="block text-darkgray font-medium mb-[5px]">
            Select Academic Session
          </label>
          <select
            value={selectedSession}
            onChange={(e) => {
              setSelectedSession(e.target.value);
              setSelectedTermId(null); // Reset selected term when switching session
            }}
            className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
          >
            <option value="2024/2025">2024/2025</option>
            <option value="2023/2024">2023/2024</option>
            <option value="2022/2023">2022/2023</option>
          </select>
        </div>

        {/* Terms Table */}
        <div className="overflow-x-auto mb-[1rem]">
          <table className="min-w-full divide-y divide-lightgray">
            <thead className="bg-lightgray">
              <tr>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">
                  Session
                </th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">
                  Term
                </th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">
                  Status
                </th>
                <th className="px-[6px] py-[3px] text-center text-[15px] font-medium text-darkgray">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-lightgray">
              {filteredTerms.map((term) => (
                <tr
                  key={term.id}
                  className={`cursor-pointer hover:bg-lightgray ${
                    selectedTermId === term.id ? "bg-green" : ""
                  }`}
                  onClick={() => setSelectedTermId(term.id)}
                >
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">
                    {term.session}
                  </td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">
                    {term.term}
                  </td>
                  <td
                    className={`px-[6px] py-[4px] whitespace-nowrap font-semibold ${
                      term.status === "Active"
                        ? "text-green"
                        : term.status === "Upcoming"
                        ? "text-orange"
                        : "text-darkgray"
                    }`}
                  >
                    {term.status}
                  </td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-center">
                    {term.status !== "Active" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSetActive(term.id);
                        }}
                        className="inline-flex items-center px-[3px] py-[1px] mr-[2px] text-green rounded-[10px] text-[15px]"
                        title="Set Active Term"
                      >
                        <FaCheckCircle />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(term.id);
                      }}
                      className="inline-flex items-center px-[3px] py-[1px] mr-[2px] text-orange rounded-[10px] text-[15px]"
                      title="Edit Term"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(term.id);
                      }}
                      className="inline-flex items-center px-[3px] py-[1px] mr-[2px] text-red rounded-[10px] text-[15px]"
                      title="Delete Term"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTerms.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No terms found for this session.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Reports Section */}
        {selectedTermId && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FaChartBar className="text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Exam Reports</h2>
            </div>
            {selectedReport ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-sm text-gray-500">Average Score</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedReport.avgScore}
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-sm text-gray-500">Highest Score</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedReport.highest}
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-sm text-gray-500">Lowest Score</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedReport.lowest}
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-sm text-gray-500">Pass Rate</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {selectedReport.passRate}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                No report data available for this term yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terms;
