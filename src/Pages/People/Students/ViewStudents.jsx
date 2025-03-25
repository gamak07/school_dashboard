import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown, FaUserSlash, FaEye } from 'react-icons/fa';

const ViewStudents = () => {
  // Sample data for students
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', studentId: 'S001', grade: '10', enrollmentDate: '2023-09-01', status: 'Active' },
    { id: 2, name: 'Bob Smith', studentId: 'S002', grade: '11', enrollmentDate: '2022-09-01', status: 'Active' },
    { id: 3, name: 'Charlie Brown', studentId: 'S003', grade: '10', enrollmentDate: '2023-09-01', status: 'Active' },
    // Add more student objects as needed
  ]);

  // States for filters and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [gradeFilter, setGradeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  // Function to handle deactivation (expulsion/suspension)
  const handleDeactivate = (id) => {
    if (window.confirm('Are you sure you want to deactivate this student?')) {
      setStudents(
        students.map((student) =>
          student.id === id ? { ...student, status: 'Deactivated' } : student
        )
      );
    }
  };

  // Sorting function
  const sortedStudents = [...students].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (aValue < bValue) return sortAsc ? -1 : 1;
    if (aValue > bValue) return sortAsc ? 1 : -1;
    return 0;
  });

  // Filter the students based on search query, grade, and status filters
  const filteredStudents = sortedStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = gradeFilter ? student.grade === gradeFilter : true;
    const matchesStatus = statusFilter ? student.status === statusFilter : true;
    return matchesSearch && matchesGrade && matchesStatus;
  });

  // Toggle sort order or set sort key
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
      {/* Header */}
      <header className="mb-[1rem] rounded-[10px] bg-background p-[1rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Student View</h1>
        </div>
      </header>

      {/* Filter Section */}
      <section className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
          <div className="flex flex-1 items-center border-2 border-lightgray rounded-[10px] py-[5px] px-[8px]">
            <FaSearch className="text-lightgray pr-[2px]" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none"
            />
          </div>
          <div>
            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="border-2 border-lightgray rounded-[10px] py-[5px] px-[8px] outline-none"
            >
              <option value="">All Grades</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
              {/* Add more grade options as needed */}
            </select>
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border-2 border-lightgray rounded-[10px] py-[5px] px-[8px] outline-none"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Students Table */}
      <section className="bg-background p-[1rem] mb-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Enrolled Students</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr>
              <th
                className="py-[2px] text-left cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name <FaSortAlphaDown className="inline-block ml-[1px]" />
              </th>
              <th className="py-[2px] text-left">Student ID</th>
              <th
                className="py-[2px] text-left cursor-pointer"
                onClick={() => handleSort('grade')}
              >
                Grade <FaSortAlphaDown className="inline-block ml-[1px]" />
              </th>
              <th
                className="py-[2px] text-left cursor-pointer"
                onClick={() => handleSort('enrollmentDate')}
              >
                Enrollment Date <FaSortAlphaDown className="inline-block ml-1" />
              </th>
              <th className="py-[2px] text-left">Status</th>
              <th className="py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-[2px]">{student.name}</td>
                <td className="py-[2px]">{student.studentId}</td>
                <td className="py-[2px]">{student.grade}</td>
                <td className="py-[2px]">{student.enrollmentDate}</td>
                <td className="py-[2px]">
                  <span
                    className={`${
                      student.status === 'Active'
                        ? 'text-green'
                        : 'text-red'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="py-[2px] flex gap-x-2">
                  <button className="flex items-center text-orange">
                    <FaEye className="mr-[1px]" /> View Details
                  </button>
                  {student.status === 'Active' && (
                    <button
                      className="flex items-center text-red"
                      onClick={() => handleDeactivate(student.id)}
                    >
                      <FaUserSlash className="mr-[1px]" /> Deactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td className="py-[5px] text-center" colSpan="6">
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

export default ViewStudents;
