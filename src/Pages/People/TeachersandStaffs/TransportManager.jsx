import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaTruck,
} from "react-icons/fa";

const initialTransportManagers = [
  {
    id: 1,
    name: "Oliver Brown",
    email: "oliver@example.com",
    vehicle: "Bus 101",
    active: true,
  },
  {
    id: 2,
    name: "Sophia Davis",
    email: "sophia@example.com",
    vehicle: "Van 202",
    active: false,
  },
];

function TransportManager() {
  const [managers, setManagers] = useState(initialTransportManagers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newManager, setNewManager] = useState({
    name: "",
    email: "",
    vehicle: "",
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
      manager.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && manager.active) ||
      (filterStatus === "inactive" && !manager.active);
    return matchesSearch && matchesStatus;
  });

  const sortedManagers = sortField
    ? [...filteredManagers].sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      )
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
    const vehicle = prompt("Enter new vehicle", managerToEdit.vehicle);
    if (name && email && vehicle) {
      setManagers(
        managers.map((manager) =>
          manager.id === id ? { ...manager, name, email, vehicle } : manager
        )
      );
    }
  };

  const handleAddManager = () => {
    const newId = managers.length
      ? Math.max(...managers.map((m) => m.id)) + 1
      : 1;
    setManagers([...managers, { id: newId, ...newManager, active: true }]);
    setNewManager({ name: "", email: "", vehicle: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaTruck className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">Transport Manager Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, or vehicle..."
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
            onClick={() => handleSort("vehicle")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Vehicle
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
              <th className="border border-lightgray p-[3px] text-left">Vehicle</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedManagers.map((manager) => (
              <tr key={manager.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{manager.name}</td>
                <td className="border border-lightgray p-[3px]">{manager.email}</td>
                <td className="border border-lightgray p-[3px]">{manager.vehicle}</td>
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

      {isAddModalOpen && (
        <div className="fixed inset-[0] flex items-center justify-center bg-text opacity-90 z-50">
          <div className="bg-background rounded-[10px] p-[1rem] w-[50%]">
            <h2 className="text-[20px] font-bold mb-[1rem]">
              Add New Transport Manager
            </h2>
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
              placeholder="Vehicle (e.g., Bus 101)"
              value={newManager.vehicle}
              onChange={(e) =>
                setNewManager({ ...newManager, vehicle: e.target.value })
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

export default TransportManager;
