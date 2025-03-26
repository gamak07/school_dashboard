import React, { useState } from 'react';
import { FaEdit, FaSearch } from 'react-icons/fa';

const Tags = () => {
  // State for tags (sample data)
  const [tags, setTags] = useState([
    { id: 1, name: 'Prefect', autoAssigned: false },
    { id: 2, name: 'Fresher', autoAssigned: true },
    { id: 3, name: 'Graduating', autoAssigned: true },
    { id: 4, name: 'Graduated', autoAssigned: true },
  ]);

  // State for creating a new tag
  const [newTagName, setNewTagName] = useState('');
  const [newTagAutoAssigned, setNewTagAutoAssigned] = useState(false);

  // State for searching tags
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered tags based on search
  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle new tag creation
  const handleSaveTag = () => {
    if (!newTagName.trim()) return;
    const newTag = {
      id: Date.now(),
      name: newTagName,
      autoAssigned: newTagAutoAssigned,
    };
    setTags([...tags, newTag]);
    setNewTagName('');
    setNewTagAutoAssigned(false);
  };

  // Handle editing a tag (placeholder in this demo)
  const handleEditTag = (id) => {
    alert(`Edit Tag with ID: ${id}`);
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      <div className="p-[1rem] mb-[1rem] flex flex-col md:flex-row md:gap-x-[4px]">
        {/* Left Panel: Student Tags List */}
        <div className="w-full md:w-2/3 bg-background p-[1rem] rounded-[10px] md:mb-[0]">
          <h2 className="text-[20px] font-bold mb-[1rem]">Student Tags List</h2>
          <div className="flex items-center justify-between mb-[1rem]">
            {/* Search */}
            <div className="flex items-center px-[8px] py-[5px] gap-[4px] rounded-[10px] border-2 border-lightgray w-1/2">
              <FaSearch className="text-lightgray" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-lightgray">
                <th className="py-[2px] px-[2px]">#</th>
                <th className="py-[2px] px-[2px]">Tag Name</th>
                <th className="py-[2px] px-[2px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTags.length > 0 ? (
                filteredTags.map((tag, index) => (
                  <tr key={tag.id} className="border-b border-lightgray">
                    <td className="py-[2px] px-[2px]">{index + 1}</td>
                    <td className="py-[2px] px-[2px]">
                      {tag.name}{' '}
                      {tag.autoAssigned && (
                        <span className="text-[15px] text-accent ml-[2px]">
                          (Auto)
                        </span>
                      )}
                    </td>
                    <td className="py-[2px] px-[2px]">
                      <button
                        onClick={() => handleEditTag(tag.id)}
                        className="bg-accent text-background px-[6px] py-[4px] rounded-[10px] hover:bg-secondary inline-flex items-center"
                      >
                        <FaEdit className="mr-[3px]" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-[4px]" colSpan={3}>
                    No tags found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Assign/Manage Student Tags button */}
          <div className="mt-[1rem]">
            <button className="bg-secondary text-background py-[5px] px-[8px] rounded-[10px] hover:bg-accent">
              Assign / Manage Student Tags
            </button>
          </div>
        </div>

        {/* Right Panel: Create New Tag */}
        <div className="w-full md:w-1/3 bg-background p-[1rem] rounded-[10px]">
          <h2 className="text-[20px] font-bold mb-[1rem]">Create New Tag</h2>
          <div className="mb-[10px]">
            <label className="block text-darkgray mb-1">Tag Name <span className="text-red">*</span></label>
            <input
              type="text"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px] outline-none"
            />
          </div>

          <div className="mb-[10px] flex items-center gap-x-[4px]">
            <input
              type="checkbox"
              checked={newTagAutoAssigned}
              onChange={() => setNewTagAutoAssigned(!newTagAutoAssigned)}
              className="h-[1rem] w-[1rem] text-green border-lightgray"
            />
            <label className="text-darkgray">Auto-assign this tag</label>
          </div>

          <button
            onClick={handleSaveTag}
            className="bg-secondary text-background py-[5px] px-[8px] rounded-[10px] hover:bg-accent"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tags;
