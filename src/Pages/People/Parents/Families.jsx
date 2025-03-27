import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';

const Families = () => {
  const [families, setFamilies] = useState([
    {
      id: 1,
      name: 'Doe Family',
      address: '123 Maple St, Springfield',
      contact: '555-1234',
      wards: [
        { id: 1, name: 'Alice Doe', grade: 'Grade 10' },
        { id: 2, name: 'Bob Doe', grade: 'Grade 8' },
      ],
    },
    {
      id: 2,
      name: 'Smith Family',
      address: '456 Oak St, Riverdale',
      contact: '555-2345',
      wards: [{ id: 3, name: 'Charlie Smith', grade: 'Grade 11' }],
    },
    {
      id: 3,
      name: 'Johnson Family',
      address: '789 Pine St, Sunnyvale',
      contact: '555-3456',
      wards: [
        { id: 4, name: 'Daisy Johnson', grade: 'Grade 10' },
        { id: 5, name: 'Ella Johnson', grade: 'Grade 9' },
        { id: 6, name: 'Noah Johnson', grade: 'Grade 7' },
      ],
    },
  ]);

  // State for search, filter, and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [childFilter, setChildFilter] = useState('all'); // 'all', '1', '2+', '3+'

  // Handle sorting
  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  // Filter and search logic
  const filteredFamilies = families
    .filter((family) => {
      const matchesFamilyName = family.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesWardName = family.wards.some((ward) =>
        ward.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return matchesFamilyName || matchesWardName;
    })
    .filter((family) => {
      if (childFilter === '1') return family.wards.length === 1;
      if (childFilter === '2+') return family.wards.length >= 2;
      if (childFilter === '3+') return family.wards.length >= 3;
      return true; // 'all' filter
    })
    .sort((a, b) => {
      if (sortAsc) return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Families</h1>
          </div>
      </header>

      {/* Filters & Sorting */}
      <section className="mb-[1rem] p-[1rem] bg-background rounded-[10px] flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
        {/* Search Input */}
        <div className="flex items-center py-[5px] px-[8px] border-2 border-lightgray rounded-[10px] flex-1">
          <FaSearch className="text-darkgray" />
          <input
            type="text"
            placeholder="Search by family or ward name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* Filter by Number of Children */}
        <select
          className="border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none"
          value={childFilter}
          onChange={(e) => setChildFilter(e.target.value)}
        >
          <option value="all">All Families</option>
          <option value="1">1 Child</option>
          <option value="2+">2+ Children</option>
          <option value="3+">3+ Children</option>
        </select>

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="bg-primary text-background px-[8px] py-[5px] rounded-[10px] flex items-center"
        >
          Sort by Name
          <FaSortAlphaDown className="ml-[2px]" />
        </button>
      </section>

      {/* Families List */}
      <section className="bg-background p-[1rem] mb-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Families List</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr className="border-b">
              <th className="py-[2px] px-[3px] text-left">Family Name</th>
              <th className="py-[2px] px-[3px] text-left">Address</th>
              <th className="py-[2px] px-[3px] text-left">Contact</th>
              <th className="py-[2px] px-[3px] text-left">Children (Ward(s))</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredFamilies.length > 0 ? (
              filteredFamilies.map((family) => (
                <tr key={family.id}>
                  <td className="py-[2px] px-[3px]">{family.name}</td>
                  <td className="py-[2px] px-[3px]">{family.address}</td>
                  <td className="py-[2px] px-[3px]">{family.contact}</td>
                  <td className="py-[2px] px-[3px]">
                    {family.wards.map((ward) => (
                      <div key={ward.id}>
                        <span className="font-semibold">{ward.name}</span> - {ward.grade}
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-[5px] text-center" colSpan="4">
                  No families found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Families;
