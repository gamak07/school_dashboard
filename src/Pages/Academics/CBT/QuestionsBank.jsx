import React, { useState } from 'react';
import { FaBrain, FaPencilRuler, FaCode, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const mockData = [
  {
    id: 1,
    title: 'Brain power Quiz',
    category: 'Personality',
    description: 'Check your brain power. Not a competition but a place for your future.',
    questionsCount: 50,
    status: 'PUBLISHED',
    bgColor: '#fca5da',
    iconColor: 'text-pink-600',
    icon: <FaBrain />
  },
  {
    id: 2,
    title: 'User interface Quiz',
    category: 'UI/UX Design',
    description: 'Test your UI/UX knowledge based on top UI system in the world.',
    questionsCount: 37,
    status: 'PUBLISHED',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: <FaPencilRuler />
  },
  {
    id: 3,
    title: 'Hypertext Preprocessor Quiz',
    category: 'Web development',
    description: 'One of the popular backend languages. See how much you know.',
    questionsCount: 40,
    status: 'PUBLISHED',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    icon: <FaCode />
  },
  // Add more items as needed...
];

const QuestionsBank = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Filter logic
  const filteredData = mockData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    const matchesStatus = selectedStatus ? item.status === selectedStatus : true;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-[1rem] bg-primary">
      <h1 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">Question bank</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-[4px] mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        {/* Search Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Start typing to search"
            className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Categories Filter */}
        <div className="flex-1">
          <select
            className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All categories</option>
            <option value="Personality">Personality</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web development">Web development</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex-1">
          <select
            className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All status</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
      </div>

      {/* Question Bank Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] p-[1rem] bg-background rounded-[10px]">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={`relative p-[10px] rounded-[10px] bg-secondary transition-transform hover:scale-105`}
          >
            {/* Status Badge */}
            <div className="absolute top-[3px] right-[3px]">
              {item.status === 'PUBLISHED' && (
                <span className="bg-secondary text-green text-[15px] font-semibold px-[4px] py-[3px] rounded-[5px]">
                  {item.status}
                </span>
              )}
              {item.status === 'DRAFT' && (
                <span className="bg-orange text-[#a37c34] text-[15px] font-semibold px-[4px] py-[3px] rounded-[5px]">
                  {item.status}
                </span>
              )}
            </div>

            {/* Icon */}
            <div className={`text-[30px] mb-[5px] text-accent`}>
              {item.icon}
            </div>

            {/* Title & Category */}
            <h2 className="text-[25px] font-semibold text-text">
              {item.title}
            </h2>
            <p className="text-[20px] text-darkgray">{item.category}</p>

            {/* Description */}
            <p className="text-[20px] text-lightgray my-[3px]">
              {item.description}
            </p>

            {/* Questions Count */}
            <p className="text-[20px] text-lightgray font-medium">
              {item.questionsCount} Questions
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-[5px] mt-[6px]">
              <button
                className="p-[4px] rounded-full bg-background text-orange"
                title="Preview"
              >
                <FaEye />
              </button>
              <button
                className="p-[4px] rounded-full bg-background text-green"
                title="Edit"
              >
                <FaEdit />
              </button>
              <button
                className="p-[4px] rounded-full bg-background text-red"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {/* No data found */}
        {filteredData.length === 0 && (
          <div className="col-span-full text-center text-darkgray">
            No question banks found.
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsBank;
