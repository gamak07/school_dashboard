import React, { useState } from 'react';
import { FaPlusCircle, FaFileExport, FaSearch, FaTrash, FaEdit } from 'react-icons/fa';

const InputEntranceExam = () => {
  // State for the form input
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    exam: '',
    score: ''
  });
  
  // State for the list of scores
  const [scores, setScores] = useState([]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to add a new score record
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.registrationNumber && formData.exam && formData.score) {
      const newRecord = { ...formData, id: Date.now() };
      setScores([...scores, newRecord]);
      setFormData({ name: '', registrationNumber: '', exam: '', score: '' });
    }
  };

  // Handle deletion of a record
  const handleDelete = (id) => {
    setScores(scores.filter(item => item.id !== id));
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header Section */}
      <header className="bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Entrance Exam Scores Management</h1>
          <div className="flex gap-x-3 mt-[4px] sm:mt-[0]">
            <button className="flex items-center bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent">
              <FaFileExport className="mr-[4px]" />
              Export Data
            </button>
          </div>
        </div>
      </header>

      {/* Score Input Form */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Input Candidate Score</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-[5px]">
          <div>
            <label className="block text-darkgray">Candidate Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter candidate name"
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] p-[4px] outline-0"
            />
          </div>
          <div>
            <label className="block text-darkgray">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="Enter registration number"
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] p-[4px] outline-0"
            />
          </div>
          <div>
            <label className="block text-darkgray">Exam</label>
            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] p-[4px] outline-0"
            >
              <option value="">Select Exam</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              {/* Add additional exams as needed */}
            </select>
          </div>
          <div>
            <label className="block text-darkgray">Score</label>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              placeholder="Enter score"
              className="mt-[2px] block w-full border-2 border-lightgray rounded-[10px] p-[4px] outline-0"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="flex items-center bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent"
            >
              <FaPlusCircle className="mr-[5px]" />
              Add Score
            </button>
          </div>
        </form>
      </section>

      {/* Scores Table */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold mb-[1rem]">Candidates' Scores</h2>
          <div className="flex items-center border border-lightgray p-[4px] rounded-[10px]">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search scores..."
              className="outline-none"
            />
          </div>
        </div>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th className="py-[2px] text-left">Candidate Name</th>
              <th className="py-[2px] text-left">Registration Number</th>
              <th className="py-[2px] text-left">Exam</th>
              <th className="py-[2px] text-left">Score</th>
              <th className="py-[2px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {scores.map((record) => (
              <tr key={record.id}>
                <td className="py-[2px]">{record.name}</td>
                <td className="py-[2px]">{record.registrationNumber}</td>
                <td className="py-[2px]">{record.exam}</td>
                <td className="py-[2px]">{record.score}</td>
                <td className="py-[2px] flex gap-x-2">
                  <button className="text-orange">
                    <FaEdit />
                  </button>
                  <button className="text-red" onClick={() => handleDelete(record.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {scores.length === 0 && (
              <tr>
                <td className="py-[8px] text-center" colSpan="5">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InputEntranceExam;
