import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaBuilding,
} from "react-icons/fa";

const initialManagers = [
  {
    id: 1,
    name: "Karen Williams",
    email: "karen@example.com",
    hostel: "Maple Hall",
    active: true,
  },
  {
    id: 2,
    name: "Mark Thompson",
    email: "mark@example.com",
    hostel: "Oak Residence",
    active: false,
  },
];

function HostelManager() {
  const [managers, setManagers] = useState(initialManagers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newManager, setNewManager] = useState({
    name: "",
    email: "",
    hostel: "",
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

  const filteredManagers = managers.filter((manager) => {
    const matchesSearch =
      manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.hostel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && manager.active) ||
      (filterStatus === "inactive" && !manager.active);
    return matchesSearch && matchesStatus;
  });

  const sortedManagers = sortField
    ? [...filteredManagers].sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      })
    : filteredManagers;

  const toggleActivation = (id) => {
    setManagers(
      managers.map((manager) =>
        manager.id === id ? { ...manager, active: !manager.active } : manager
      )
    );
  };

  const handleDelete = (id) => {
    setManagers(managers.filter((manager) => manager.id !== id));
  };

  const handleEdit = (id) => {
    const managerToEdit = managers.find((manager) => manager.id === id);
    if (!managerToEdit) return;
    const name = prompt("Enter new name", managerToEdit.name);
    const email = prompt("Enter new email", managerToEdit.email);
    const hostel = prompt("Enter new hostel", managerToEdit.hostel);
    if (name && email && hostel) {
      setManagers(
        managers.map((manager) =>
          manager.id === id ? { ...manager, name, email, hostel } : manager
        )
      );
    }
  };

  const handleAddManager = () => {
    const newId = managers.length
      ? Math.max(...managers.map((m) => m.id)) + 1
      : 1;
    setManagers([...managers, { id: newId, ...newManager, active: true }]);
    setNewManager({ name: "", email: "", hostel: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaBuilding className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">Hostel Manager Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, or hostel..."
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
            onClick={() => handleSort("hostel")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Hostel
          </button>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
        >
          <FaUserPlus /> Add Manager
        </button>
      </div>

      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Hostel</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedManagers.map((manager) => (
              <tr key={manager.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{manager.name}</td>
                <td className="border border-lightgray p-[3px]">{manager.email}</td>
                <td className="border border-lightgray p-[3px]">{manager.hostel}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {manager.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(manager.id)}>
                    {manager.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(manager.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(manager.id)}
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

      {/* Modal for adding new hostel manager */}
      {isAddModalOpen && (
        <div className="fixed inset-[0] flex items-center justify-center bg-text opacity-90 z-50">
          <div className="bg-background rounded-[10px] p-[1rem] w-[50%]">
            <h2 className="text-[20px] font-bold mb-[1rem]">Add New Manager</h2>
            <input
              type="text"
              placeholder="Name"
              value={newManager.name}
              onChange={(e) =>
                setNewManager({ ...newManager, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newManager.email}
              onChange={(e) =>
                setNewManager({ ...newManager, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Hostel (e.g., Maple Hall)"
              value={newManager.hostel}
              onChange={(e) =>
                setNewManager({ ...newManager, hostel: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddManager}
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

export default HostelManager;
