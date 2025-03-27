import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaUserGraduate,
} from "react-icons/fa";

const initialOfficers = [
  {
    id: 1,
    name: "Samantha Lee",
    email: "samantha@example.com",
    region: "North",
    active: true,
  },
  {
    id: 2,
    name: "David Kim",
    email: "david@example.com",
    region: "South",
    active: false,
  },
];

function AdmissionOfficer() {
  const [officers, setOfficers] = useState(initialOfficers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newOfficer, setNewOfficer] = useState({
    name: "",
    email: "",
    region: "",
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

  const filteredOfficers = officers.filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && officer.active) ||
      (filterStatus === "inactive" && !officer.active);
    return matchesSearch && matchesStatus;
  });

  const sortedOfficers = sortField
    ? [...filteredOfficers].sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      })
    : filteredOfficers;

  const toggleActivation = (id) => {
    setOfficers(
      officers.map((officer) =>
        officer.id === id ? { ...officer, active: !officer.active } : officer
      )
    );
  };

  const handleDelete = (id) => {
    setOfficers(officers.filter((officer) => officer.id !== id));
  };

  const handleEdit = (id) => {
    const officerToEdit = officers.find((officer) => officer.id === id);
    if (!officerToEdit) return;
    const name = prompt("Enter new name", officerToEdit.name);
    const email = prompt("Enter new email", officerToEdit.email);
    const region = prompt("Enter new region", officerToEdit.region);
    if (name && email && region) {
      setOfficers(
        officers.map((officer) =>
          officer.id === id ? { ...officer, name, email, region } : officer
        )
      );
    }
  };

  const handleAddOfficer = () => {
    const newId = officers.length
      ? Math.max(...officers.map((o) => o.id)) + 1
      : 1;
    setOfficers([...officers, { id: newId, ...newOfficer, active: true }]);
    setNewOfficer({ name: "", email: "", region: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaUserGraduate className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">Admission Officer Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, or region..."
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
            onClick={() => handleSort("region")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Region
          </button>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
        >
          <FaUserPlus /> Add Officer
        </button>
      </div>

      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Region</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedOfficers.map((officer) => (
              <tr key={officer.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{officer.name}</td>
                <td className="border border-lightgray p-[3px]">{officer.email}</td>
                <td className="border border-lightgray p-[3px]">{officer.region}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {officer.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(officer.id)}>
                    {officer.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(officer.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(officer.id)}
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
              Add New Admission Officer
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={newOfficer.name}
              onChange={(e) =>
                setNewOfficer({ ...newOfficer, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newOfficer.email}
              onChange={(e) =>
                setNewOfficer({ ...newOfficer, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Region"
              value={newOfficer.region}
              onChange={(e) =>
                setNewOfficer({ ...newOfficer, region: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddOfficer}
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

export default AdmissionOfficer;
