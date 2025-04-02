import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

const Classes = () => {
  // Sample data for classes
  const [classes, setClasses] = useState([
    { id: 1, name: 'Mathematics', teacher: 'John Doe', room: 'A101' },
    { id: 2, name: 'Science', teacher: 'Jane Smith', room: 'B202' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newClass, setNewClass] = useState({ name: '', teacher: '', room: '' });

  // Filter classes based on search term
  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler to add a new class
  const handleAddClass = () => {
    const newId = classes.length + 1;
    setClasses([...classes, { id: newId, ...newClass }]);
    setNewClass({ name: '', teacher: '', room: '' });
    setShowModal(false);
  };

  // Handler to delete a class
  const handleDelete = (id) => {
    setClasses(classes.filter((cls) => cls.id !== id));
  };

  return (
    <div className="bg-primary p-[1rem]">
      <div className="bg-background rounded-[10px] p-[1rem] flex justify-between items-center mb-[1rem]">
        <h1 className="text-[20px] font-bold">
          Manage Classes &amp; Classroom Activities
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-secondary hover:bg-accent text-background py-[5px] px-[8px] rounded-[10px]"
        >
          <FiPlus className="mr-[2px]" /> Add Class
        </button>
      </div>

      <div className="mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search Classes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-2 border-lightgray rounded-10px py-[5px] px-[8px]"
        />
      </div>

      <div className="bg-background p-[1rem] rounded-[10px] overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="py-[2px] px-[4px] border">Class Name</th>
              <th className="py-[2px] px-[4px] border">Teacher</th>
              <th className="py-[2px] px-[4px] border">Room</th>
              <th className="py-[2px] px-[4px] border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((cls) => (
              <tr key={cls.id} className="hover:bg-lightgray">
                <td className="py-[2px] px-[4px] border">{cls.name}</td>
                <td className="py-[2px] px-[4px] border">{cls.teacher}</td>
                <td className="py-[2px] px-[4px] border">{cls.room}</td>
                <td className="py-[2px] px-[4px] border flex gap-x-[2px]">
                  <button className="text-green">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(cls.id)}
                    className="text-red"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding a new class */}
      {showModal && (
        <div className="fixed inset-[0] flex items-center justify-center opacity-80">
          <div className="bg-accent p-[1rem] rounded-[10px] w-1/3">
            <h2 className="text-[20px] font-bold mb-[1rem] text-background">Add New Class</h2>
            <div className="mb-[1rem]">
              <label className="block text-darkgray">Class Name</label>
              <input
                type="text"
                value={newClass.name}
                onChange={(e) =>
                  setNewClass({ ...newClass, name: e.target.value })
                }
                className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
              />
            </div>
            <div className="mb-[1rem]">
              <label className="block text-darkgray">Teacher</label>
              <input
                type="text"
                value={newClass.teacher}
                onChange={(e) =>
                  setNewClass({ ...newClass, teacher: e.target.value })
                }
                className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
              />
            </div>
            <div className="mb-[1rem]">
              <label className="block text-darkgray">Room</label>
              <input
                type="text"
                value={newClass.room}
                onChange={(e) =>
                  setNewClass({ ...newClass, room: e.target.value })
                }
                className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
              />
            </div>
            <div className="flex justify-end gap-x-[4px]">
              <button
                onClick={() => setShowModal(false)}
                className="px-[8px] py-[5px] bg-background rounded-[10px]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddClass}
                className="px-[8px] py-[5px] bg-background rounded-[10px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;
