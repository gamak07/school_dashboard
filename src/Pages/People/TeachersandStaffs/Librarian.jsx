import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaBook,
} from "react-icons/fa";

const initialLibrarians = [
  {
    id: 1,
    name: "Emily Carter",
    email: "emily@example.com",
    section: "Reference",
    active: true,
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james@example.com",
    section: "Circulation",
    active: false,
  },
];

function Librarian() {
  const [librarians, setLibrarians] = useState(initialLibrarians);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLibrarian, setNewLibrarian] = useState({
    name: "",
    email: "",
    section: "",
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSort = (field) => {
    setSortField(field);
  };

  const filteredLibrarians = librarians.filter((lib) => {
    const matchesSearch =
      lib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lib.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lib.section.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && lib.active) ||
      (filterStatus === "inactive" && !lib.active);
    return matchesSearch && matchesStatus;
  });

  const sortedLibrarians = sortField
    ? [...filteredLibrarians].sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      )
    : filteredLibrarians;

  const toggleActivation = (id) => {
    setLibrarians(
      librarians.map((lib) =>
        lib.id === id ? { ...lib, active: !lib.active } : lib
      )
    );
  };

  const handleDelete = (id) => {
    setLibrarians(librarians.filter((lib) => lib.id !== id));
  };

  const handleEdit = (id) => {
    const libToEdit = librarians.find((lib) => lib.id === id);
    if (!libToEdit) return;
    const name = prompt("Enter new name", libToEdit.name);
    const email = prompt("Enter new email", libToEdit.email);
    const section = prompt("Enter new section", libToEdit.section);
    if (name && email && section) {
      setLibrarians(
        librarians.map((lib) =>
          lib.id === id ? { ...lib, name, email, section } : lib
        )
      );
    }
  };

  const handleAddLibrarian = () => {
    const newId = librarians.length
      ? Math.max(...librarians.map((lib) => lib.id)) + 1
      : 1;
    setLibrarians([
      ...librarians,
      { id: newId, ...newLibrarian, active: true },
    ]);
    setNewLibrarian({ name: "", email: "", section: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="ftext-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaBook className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">Librarian Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, or section..."
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
            onClick={() => handleSort("section")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Section
          </button>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
        >
          <FaUserPlus /> Add Librarian
        </button>
      </div>
      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Section</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedLibrarians.map((lib) => (
              <tr key={lib.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{lib.name}</td>
                <td className="border border-lightgray p-[3px]">{lib.email}</td>
                <td className="border border-lightgray p-[3px]">{lib.section}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {lib.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(lib.id)}>
                    {lib.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(lib.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(lib.id)}
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
            <h2 className="text-[20px] font-bold mb-[1rem]">Add New Librarian</h2>
            <input
              type="text"
              placeholder="Name"
              value={newLibrarian.name}
              onChange={(e) =>
                setNewLibrarian({ ...newLibrarian, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newLibrarian.email}
              onChange={(e) =>
                setNewLibrarian({ ...newLibrarian, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Section (e.g., Reference, Circulation)"
              value={newLibrarian.section}
              onChange={(e) =>
                setNewLibrarian({ ...newLibrarian, section: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddLibrarian}
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

export default Librarian;
