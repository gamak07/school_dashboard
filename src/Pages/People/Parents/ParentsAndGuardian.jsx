import React, { useState } from 'react';
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';

const ParentsAndGuardian = () => {
  // Sample data representing parents/guardians with their children
  const [parents, setParents] = useState([
    {
      id: 1,
      name: 'John Doe',
      contact: '555-1234',
      children: [
        { id: 1, name: 'Alice Doe', grade: 'Grade 10' },
        { id: 2, name: 'Bob Doe', grade: 'Grade 8' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      contact: '555-2345',
      children: [{ id: 3, name: 'Charlie Smith', grade: 'Grade 11' }],
    },
    {
      id: 3,
      name: 'Samuel Johnson',
      contact: '555-3456',
      children: [
        { id: 4, name: 'Daisy Johnson', grade: 'Grade 10' },
        { id: 5, name: 'Ella Johnson', grade: 'Grade 9' },
      ],
    },
    // Add more parent records as needed
  ]);

  // State for search query and sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  // Sorting parents based on the sort key (by parent name in this case)
  const sortedParents = [...parents].sort((a, b) => {
    const aValue = a[sortKey].toLowerCase();
    const bValue = b[sortKey].toLowerCase();
    if (aValue < bValue) return sortAsc ? -1 : 1;
    if (aValue > bValue) return sortAsc ? 1 : -1;
    return 0;
  });

  // Filtering parents: Check if parent's name or any child's name includes the search query
  const filteredParents = sortedParents.filter((parent) => {
    const matchesParentName = parent.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChildName = parent.children.some((child) =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesParentName || matchesChildName;
  });

  // Handle sorting toggle when header is clicked
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
      <header className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Parents / Guardians</h1>
          </div>
      </header>

      {/* Filter Section */}
      <section className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-[4px] gap-y-[4px] md:gap-y-[0]">
          <div className="flex items-center py-[5px] px-[8px] border-2 border-lightgray rounded-[10px] flex-1">
            <FaSearch className="text-darkgray" />
            <input
              type="text"
              placeholder="Search by parent or child name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>
      </section>

      {/* Parents/Guardians Table */}
      <section className="bg-background p-[1rem] rounded-[10px] mb-[1rem]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Parents & Guardians List</h2>
        <table className="min-w-full divide-y divide-lightgray">
          <thead>
            <tr className="border-b">
              <th
                className="py-[2px] px-[3px] text-left cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Parent Name <FaSortAlphaDown className="inline-block ml-[1px]" />
              </th>
              <th className="py-2 px-3 text-left">Contact</th>
              <th className="py-2 px-3 text-left">Children (Ward(s))</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightgray">
            {filteredParents.length > 0 ? (
              filteredParents.map((parent) => (
                <tr key={parent.id}>
                  <td className="py-[2px] px-[3px]">{parent.name}</td>
                  <td className="py-[2px] px-[3px]">{parent.contact}</td>
                  <td className="py-[2px] px-[3px]">
                    {parent.children.map((child) => (
                      <div key={child.id}>
                        <span className="font-semibold">{child.name}</span> - {child.grade}
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-[5px] text-center" colSpan="3">
                  No parents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ParentsAndGuardian;
