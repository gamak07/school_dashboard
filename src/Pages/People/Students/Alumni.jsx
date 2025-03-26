import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';

const Alumni = () => {
  // Sample data for alumni
  const [alumni, setAlumni] = useState([
    { id: 1, name: 'Alice Johnson', graduationYear: 2018, major: 'Computer Science' },
    { id: 2, name: 'Bob Smith', graduationYear: 2019, major: 'Mathematics' },
    { id: 3, name: 'Charlie Brown', graduationYear: 2020, major: 'Physics' },
    { id: 4, name: 'Diana Prince', graduationYear: 2018, major: 'History' },
    { id: 5, name: 'Ethan Hunt', graduationYear: 2021, major: 'Engineering' },
    // ... add more alumni as needed
  ]);

  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [gradYearFilter, setGradYearFilter] = useState('');

  // Filter alumni based on search query and graduation year
  const filteredAlumni = alumni.filter((alum) => {
    const matchesName = alum.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = gradYearFilter ? alum.graduationYear === parseInt(gradYearFilter, 10) : true;
    return matchesName && matchesYear;
  });

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="mb-[1rem] p-[1rem] rounded-[10px] bg-background">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Alumni</h1>
        </div>
      </header>

      {/* Filter Section */}
      <section className="mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
          <div className="flex items-center px-[8px] py-[5px] rounded-[10px] border-2 border-lightgray flex-1">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search alumni by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none"
            />
          </div>
          <div>
            <select
              value={gradYearFilter}
              onChange={(e) => setGradYearFilter(e.target.value)}
              className="border-2 rounded-[10px] border-lightgray rounded px-[8px] py-[5px] outline-none"
            >
              <option value="">All Graduation Years</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </section>

      {/* Alumni Table */}
      <section className="bg-background p-[1rem] mb-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Alumni List</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr className="border-b border-lightgray">
              <th className="py-[2px] px-[3px] text-left cursor-pointer">
                Name <FaSortAlphaDown className="inline-block ml-[1px]" />
              </th>
              <th className="py-[2px] px-[3px] text-left">Graduation Year</th>
              <th className="py-[2px] px-[3px] text-left">Major</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map((alum) => (
                <tr key={alum.id}>
                  <td className="py-[2px] px-[3px]">{alum.name}</td>
                  <td className="py-[2px] px-[3px]">{alum.graduationYear}</td>
                  <td className="py-[2px] px-[3px]">{alum.major}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-[5px] text-center" colSpan="3">
                  No alumni found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Alumni;
