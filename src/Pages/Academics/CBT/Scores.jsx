2// Scores.jsx
import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaUserGraduate, FaSearch } from 'react-icons/fa';

const initialScores = [
  {
    id: 1,
    studentName: 'Alice Johnson',
    examTitle: 'Math Proficiency Exam',
    score: 85,
    examDate: '2025-04-15',
  },
  {
    id: 2,
    studentName: 'Bob Smith',
    examTitle: 'English Language Exam',
    score: 78,
    examDate: '2025-04-16',
  },
  {
    id: 3,
    studentName: 'Catherine Lee',
    examTitle: 'Science Aptitude Exam',
    score: 92,
    examDate: '2025-04-17',
  },
  // Add more records as needed...
];

const Scores = () => {
  const [scores, setScores] = useState(initialScores);
  const [searchText, setSearchText] = useState('');

  // Filter scores by student name or exam title
  const filteredScores = scores.filter(score =>
    score.studentName.toLowerCase().includes(searchText.toLowerCase()) ||
    score.examTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleView = (id) => {
    // Implement view details functionality (e.g., open a modal with full details)
    console.log(`View details for score id: ${id}`);
  };

  const handleEdit = (id) => {
    // Implement edit functionality (e.g., navigate to an edit page or open an edit modal)
    console.log(`Edit score with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality (e.g., remove record from backend and update state)
    const updatedScores = scores.filter(score => score.id !== id);
    setScores(updatedScores);
  };

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      <div className="mx-auto bg-background p-[1rem] rounded-[10px]">
        <div className="flex items-center justify-between mb-[1rem] border-b border-lightgray pb-[1rem]">
          <div className="flex items-center gap-[4px]">
            <FaUserGraduate className="text-blue-600 text-2xl" />
            <h1 className="text-[30px] font-bold text-darkgray">Exam Scores</h1>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-[3px] border-2 border-lightgray rounded-[10px] py-[5px] px-[8px]">
              <FaSearch className="text-darkgray" />
              <input
                type="text"
                placeholder="Search by student or exam..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pr-4 py-2  outline-none"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-lightgray">
            <thead className="bg-lightgray">
              <tr>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Student Name</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Exam Title</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Score</th>
                <th className="px-[6px] py-[3px] text-left text-[15px] font-medium text-darkgray">Exam Date</th>
                <th className="px-[6px] py-[3px] text-center text-[15px] font-medium text-darkgray">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-lightgray">
              {filteredScores.map((score) => (
                <tr key={score.id}>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-text">{score.studentName}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-text">{score.examTitle}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{score.score}</td>
                  <td className="px-[6px] py-[4px] whitespace-nowrap text-darkgray">{score.examDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => handleView(score.id)}
                      className="inline-flex items-center px-[4px] py-[2px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[10px] text-orange"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(score.id)}
                      className="inline-flex items-center px-[4px] py-[2px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[10px] text-green"
                      title="Edit Score"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(score.id)}
                      className="inline-flex items-center px-[4px] py-[2px] mr-[2px] border border-transparent text-[15px] leading-[4px] font-medium rounded-[10px] text-red"
                      title="Delete Score"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredScores.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-[6px] py-[4px] text-center text-darkgray">
                    No exam scores found.
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

export default Scores;
