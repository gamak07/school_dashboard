// CBTExamSchedule.jsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';

const initialSchedules = [
  {
    id: 1,
    title: 'Math Proficiency Exam',
    date: '2025-04-15',
    startTime: '09:00',
    endTime: '11:00',
  },
  {
    id: 2,
    title: 'English Language Exam',
    date: '2025-04-16',
    startTime: '10:00',
    endTime: '12:00',
  },
  {
    id: 3,
    title: 'Science Aptitude Exam',
    date: '2025-04-17',
    startTime: '13:00',
    endTime: '15:00',
  },
];

const Schedules = () => {
  const [schedules, setSchedules] = useState(initialSchedules);

  const handleEdit = (id) => {
    // Implement the edit functionality here.
    console.log(`Edit schedule with id ${id}`);
  };

  const handleDelete = (id) => {
    // Implement the delete functionality here.
    const updatedSchedules = schedules.filter(schedule => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  const handleAddNew = () => {
    // Implement the add new schedule functionality here (e.g., open a modal).
    console.log('Add new exam schedule');
  };

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      <div className="mx-auto bg-background p-[1rem] rounded-[10px]">
        <div className="flex items-center justify-between mb-[1rem] border-b border-lightgray pb-[1rem]">
          <h1 className="text-[30px] font-bold text-darkgray flex items-center gap-[2px]">
            <FaCalendarAlt className="text-green" />
            Exam Schedule
          </h1>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-[2px] bg-secondary hover:bg-accent text-white font-semibold px-[8px] py-[5px] rounded-[10px]"
          >
            <FaPlusCircle />
            <span>Add New Exam</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-lightgray">
            <thead className="bg-lightgray">
              <tr>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Exam Title</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Date</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Start Time</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">End Time</th>
                <th className="px-[6px] py-[3px] text-center text-[15px] font-medium text-darkgray">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-lightgray">
              {schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-text">{schedule.title}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{schedule.date}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{schedule.startTime}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{schedule.endTime}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-center">
                    <button
                      onClick={() => handleEdit(schedule.id)}
                      className="inline-flex items-center px-[4px] py-[2px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[10px] text-green"
                      title="Edit Exam Schedule"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(schedule.id)}
                      className="inline-flex items-center px-[4px] py-[2px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[10px] text-red"
                      title="Delete Exam Schedule"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {schedules.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-[6px] py-[4px] text-center text-darkgray">
                    No exam schedules found.
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

export default Schedules;
