import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown, FaExchangeAlt, FaGraduationCap, FaArrowUp } from 'react-icons/fa';

const Promotions = () => {
  // Sample data for students
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', currentClass: 'Grade 10', status: 'Active', eligiblePromotion: true },
    { id: 2, name: 'Bob Smith', currentClass: 'Grade 11', status: 'Active', eligiblePromotion: true },
    { id: 3, name: 'Charlie Brown', currentClass: 'Grade 12', status: 'Active', eligiblePromotion: false },
    // Add more student objects as needed
  ]);

  // States for filters and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  // Handler for promotion action
  const handlePromote = (id) => {
    // Implement promotion logic here (e.g., update student class in the backend)
    alert(`Student with id ${id} has been promoted.`);
  };

  // Handler for class transfer action
  const handleTransfer = (id) => {
    // Implement transfer logic here (e.g., open modal for new class selection)
    alert(`Student with id ${id} has been transferred to another class.`);
  };

  // Handler for graduation action
  const handleGraduate = (id) => {
    // Implement graduation logic here (e.g., mark student as graduated)
    alert(`Student with id ${id} has been marked for graduation.`);
  };

  // Sorting logic
  const sortedStudents = [...students].sort((a, b) => {
    const aValue = a[sortKey].toLowerCase();
    const bValue = b[sortKey].toLowerCase();
    if (aValue < bValue) return sortAsc ? -1 : 1;
    if (aValue > bValue) return sortAsc ? 1 : -1;
    return 0;
  });

  // Filtering logic based on search and class filters
  const filteredStudents = sortedStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter ? student.currentClass === classFilter : true;
    return matchesSearch && matchesClass;
  });

  // Toggle sort order or change sort key
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header Section */}
      <header className="mb-[1rem] bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">
            Student Promotion, Transfer & Graduation
          </h1>
        </div>
      </header>

      {/* Filter & Sorting Section */}
      <section className="mb-[1rem] bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
          <div className="border-2 border-lightgray flex items-center flex-1 px-[8px] py-[5px] rounded-[10px] gap-[4px]">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search by student name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none"
            />
          </div>
          <div>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] focus:outline-none"
            >
              <option value="">All Classes</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
              {/* Additional class options */}
            </select>
          </div>
        </div>
      </section>

      {/* Students Table */}
      <section className="bg-background p-[1rem] mb-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Manage Student Progression</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th
                className="py-[2px] text-left cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name <FaSortAlphaDown className="inline-block ml-[1px]" />
              </th>
              <th className="py-[2px] text-left">Current Class</th>
              <th className="py-[2px] text-left">Status</th>
              <th className="py-[2px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-[2px]">{student.name}</td>
                <td className="py-[2px]">{student.currentClass}</td>
                <td className="py-[2px]">{student.status}</td>
                <td className="py-[2px] flex gap-x-[2px]">
                  {student.eligiblePromotion && (
                    <button
                      onClick={() => handlePromote(student.id)}
                      className="flex items-center text-green"
                    >
                      <FaArrowUp className="mr-[3px]" /> Promote
                    </button>
                  )}
                  <button
                    onClick={() => handleTransfer(student.id)}
                    className="flex items-center text-orange"
                  >
                    <FaExchangeAlt className="mr-[3px]" /> Transfer
                  </button>
                  <button
                    onClick={() => handleGraduate(student.id)}
                    className="flex items-center text-red"
                  >
                    <FaGraduationCap className="mr-[3px]" /> Graduate
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td className="py-[5px] text-center" colSpan="4">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Promotions;
