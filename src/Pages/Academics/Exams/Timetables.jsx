// Timetables.jsx
import React, { useState } from "react";
import { FaCalendarAlt, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const initialTimetable = [
  {
    id: 1,
    examTitle: "Mathematics Exam",
    date: "2025-06-10",
    startTime: "09:00",
    endTime: "11:00",
    venue: "Room 101",
  },
  {
    id: 2,
    examTitle: "English Language Exam",
    date: "2025-06-12",
    startTime: "10:00",
    endTime: "12:00",
    venue: "Room 102",
  },
  {
    id: 3,
    examTitle: "Science Exam",
    date: "2025-06-14",
    startTime: "13:00",
    endTime: "15:00",
    venue: "Room 103",
  },
];

const Timetables = () => {
  const [timetable, setTimetable] = useState(initialTimetable);

  const handleEdit = (id) => {
    // Implement your edit functionality (e.g., open a modal)
    console.log(`Edit exam with id ${id}`);
  };

  const handleDelete = (id) => {
    // Remove exam entry from timetable
    const updatedTimetable = timetable.filter((exam) => exam.id !== id);
    setTimetable(updatedTimetable);
  };

  const handleAddNew = () => {
    // Implement add new exam functionality (e.g., open a form modal)
    console.log("Add new exam timetable entry");
  };

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      <div className="mx-auto bg-background p-[1rem] rounded-[10px]">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-[1rem] p-[1rem] border-b border-lightgray">
          <h1 className="text-[30px] font-bold text-darkgray flex items-center gap-[3px]">
            <FaCalendarAlt className="text-green" />
            Exam Timetable
          </h1>
          <button
            onClick={handleAddNew}
            className="flex items-center px-[8px] py-[5px] bg-secondary text-background rounded-[10px] hover:bg-accent"
          >
            <FaPlus />
            <span>Add New Exam</span>
          </button>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto mb-[1rem]">
          <table className="min-w-full divide-y divide-lightgray">
            <thead className="bg-lightgray">
              <tr>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Exam Title</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Date</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Start Time</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">End Time</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Venue</th>
                <th className="px-[6px] py-[3px] text-center text-[15px] font-medium text-darkgray">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lightgray">
              {timetable.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{exam.examTitle}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{exam.date}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{exam.startTime}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{exam.endTime}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{exam.venue}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-center">
                    <button
                      onClick={() => handleEdit(exam.id)}
                      className="inline-flex items-center px-[3px] py-[1px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[15px] text-green"
                      title="Edit Exam"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(exam.id)}
                      className="inline-flex items-center px-[3px] py-[1px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[15px] text-red"
                      title="Delete Exam"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {timetable.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-[6px] py-[4px] text-center text-darkgray">
                    No exam timetable entries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetables;
