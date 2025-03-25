import React, { useState } from 'react';
import { FaSearch, FaBan, FaTimes, FaEdit } from 'react-icons/fa';

const ReviewEntranceExam = () => {
  // Sample data for results
  const [results, setResults] = useState([
    {
      id: 1,
      candidateName: 'John Doe',
      registrationNumber: 'A001',
      exam: 'Math',
      score: 90,
      decision: 'Accepted'
    },
    {
      id: 2,
      candidateName: 'Jane Smith',
      registrationNumber: 'A002',
      exam: 'Science',
      score: 75,
      decision: 'Accepted'
    },
    {
      id: 3,
      candidateName: 'Alice Johnson',
      registrationNumber: 'A003',
      exam: 'English',
      score: 65,
      decision: 'Review Pending'
    },
    {
      id: 4,
      candidateName: 'Bob Brown',
      registrationNumber: 'A004',
      exam: 'Math',
      score: 55,
      decision: 'Disqualified'
    }
    // Add more results as needed
  ]);

  // States for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [examFilter, setExamFilter] = useState('');
  const [decisionFilter, setDecisionFilter] = useState('');

  // Handler for actions
  const handleDisqualify = (id) => {
    // Implement disqualification logic here
    alert(`Candidate with id ${id} has been disqualified`);
  };

  const handleCancelResult = (id) => {
    // Implement cancel result logic here
    alert(`Result for candidate id ${id} has been cancelled`);
  };

  const handleChangeDecision = (id) => {
    // Implement change decision logic here
    alert(`Decision for candidate id ${id} will be changed`);
  };

  // Filter the results based on search query and dropdown filters
  const filteredResults = results.filter((result) => {
    const matchesSearch =
      result.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExam = examFilter ? result.exam === examFilter : true;
    const matchesDecision = decisionFilter ? result.decision === decisionFilter : true;
    return matchesSearch && matchesExam && matchesDecision;
  });

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Result Review</h1>
        </div>
      </header>

      {/* Filter Section */}
      <section className="mt-[1rem] bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
          <div className="flex items-center flex-1 gap-[4px] border-2 border-lightgray rounded-[10px] py-[5px] px-[8px]">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search by name or registration..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=":outline-none w-full"
            />
          </div>
          <div>
            <select
              value={examFilter}
              onChange={(e) => setExamFilter(e.target.value)}
              className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none"
            >
              <option value="">All Exams</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              {/* Add more exam options as needed */}
            </select>
          </div>
          <div>
            <select
              value={decisionFilter}
              onChange={(e) => setDecisionFilter(e.target.value)}
              className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none"
            >
              <option value="">All Decisions</option>
              <option value="Accepted">Accepted</option>
              <option value="Review Pending">Review Pending</option>
              <option value="Disqualified">Disqualified</option>
              {/* Add more decision options as needed */}
            </select>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="bg-background p-[1rem] mt-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Review Candidate Results</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th className="py-[2px] text-left">Candidate Name</th>
              <th className="py-[2px] text-left">Registration No.</th>
              <th className="py-[2px] text-left">Exam</th>
              <th className="py-[2px] text-left">Score</th>
              <th className="py-[2px] text-left">Decision</th>
              <th className="py-[2px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredResults.map((result) => (
              <tr key={result.id}>
                <td className="py-[2px]">{result.candidateName}</td>
                <td className="py-[2px]">{result.registrationNumber}</td>
                <td className="py-[2px]">{result.exam}</td>
                <td className="py-[2px]">{result.score}</td>
                <td className="py-[2px]">{result.decision}</td>
                <td className="py-[2px] flex gap-x-2">
                  <button
                    className="flex items-center text-red"
                    onClick={() => handleDisqualify(result.id)}
                  >
                    <FaBan className="mr-[3px]" /> Disqualify
                  </button>
                  <button
                    className="flex items-center text-darkgray"
                    onClick={() => handleCancelResult(result.id)}
                  >
                    <FaTimes className="mr-[3px]" /> Cancel Result
                  </button>
                  <button
                    className="flex items-center text-green"
                    onClick={() => handleChangeDecision(result.id)}
                  >
                    <FaEdit className="mr-[3px]" /> Change Decision
                  </button>
                </td>
              </tr>
            ))}
            {filteredResults.length === 0 && (
              <tr>
                <td className="py-[5px] text-center" colSpan="6">No results available</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReviewEntranceExam;
