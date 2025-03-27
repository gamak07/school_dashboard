import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const initialTeachers = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", active: true },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", active: false },
];

function Teachers() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "" });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSort = (field) => {
    setSortField(field);
  };

  const filteredTeachers = teachers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && t.active) ||
      (filterStatus === "inactive" && !t.active);
    return matchesSearch && matchesStatus;
  });

  const sortedTeachers = sortField
    ? [...filteredTeachers].sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      })
    : filteredTeachers;

  const toggleActivation = (id) => {
    setTeachers(
      teachers.map((t) => (t.id === id ? { ...t, active: !t.active } : t))
    );
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const teacherToEdit = teachers.find((t) => t.id === id);
    if (!teacherToEdit) return;
    const name = prompt("Enter new name", teacherToEdit.name);
    const email = prompt("Enter new email", teacherToEdit.email);
    if (name && email) {
      setTeachers(
        teachers.map((t) => (t.id === id ? { ...t, name, email } : t))
      );
    }
  };

  const handleAddTeacher = () => {
    const newId = teachers.length
      ? Math.max(...teachers.map((t) => t.id)) + 1
      : 1;
    setTeachers([
      ...teachers,
      {
        id: newId,
        name: newTeacher.name,
        email: newTeacher.email,
        active: true,
      },
    ]);
    setNewTeacher({ name: "", email: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <h1 className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        Teachers
      </h1>
      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-2 border-lightgray rounded-[10px] py-[5px] px-[8px]"
        />
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className="border-2 border-lightgray rounded-[10px] py-[5px] px-[8px]"
        >
          <option value="all">All</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
        <div className="flex gap-[4px]">
          <button
            onClick={() => handleSort("name")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Name
          </button>
          <button
            onClick={() => handleSort("email")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Email
          </button>
        </div>
        <button
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
          onClick={() => setIsAddModalOpen(true)}
        >
          <FaUserPlus /> Add Teacher
        </button>
      </div>

      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{teacher.name}</td>
                <td className="border border-lightgray p-[3px]">{teacher.email}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {teacher.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(teacher.id)}>
                    {teacher.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(teacher.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(teacher.id)}
                    className="text-red"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-[0] flex items-center justify-center bg-text opacity-90 z-50">
          <div className="bg-background rounded-[10px] p-[1rem] w-[50%]">
            <h2 className="text-[20px] font-bold mb-[1rem]">Add New Teacher</h2>
            <input
              type="text"
              placeholder="Name"
              value={newTeacher.name}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newTeacher.email}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddTeacher}
                className="bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent"
              >
                Add
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="bg-darkgray text-background px-[8px] py-[5px] rounded-[10px] hover:bg-lightgray hover:text-text"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teachers;
