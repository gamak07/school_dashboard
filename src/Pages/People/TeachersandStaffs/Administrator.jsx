import React, { useState } from "react";
import {
  FaUserShield,
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const initialAdmins = [
  {
    id: 1,
    name: "Admin One",
    email: "admin1@example.com",
    privileges: "Full",
    active: true,
  },
  {
    id: 2,
    name: "Admin Two",
    email: "admin2@example.com",
    privileges: "Limited",
    active: false,
  },
];

function Administrator() {
  const [admins, setAdmins] = useState(initialAdmins);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    privileges: "",
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

  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.privileges.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && admin.active) ||
      (filterStatus === "inactive" && !admin.active);
    return matchesSearch && matchesStatus;
  });

  const sortedAdmins = sortField
    ? [...filteredAdmins].sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      )
    : filteredAdmins;

  const toggleActivation = (id) => {
    setAdmins(
      admins.map((admin) =>
        admin.id === id ? { ...admin, active: !admin.active } : admin
      )
    );
  };

  const handleDelete = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const handleEdit = (id) => {
    const adminToEdit = admins.find((admin) => admin.id === id);
    if (!adminToEdit) return;
    const name = prompt("Enter new name", adminToEdit.name);
    const email = prompt("Enter new email", adminToEdit.email);
    const privileges = prompt("Enter new privileges", adminToEdit.privileges);
    if (name && email && privileges) {
      setAdmins(
        admins.map((admin) =>
          admin.id === id ? { ...admin, name, email, privileges } : admin
        )
      );
    }
  };

  const handleAddAdmin = () => {
    const newId = admins.length ? Math.max(...admins.map((a) => a.id)) + 1 : 1;
    setAdmins([...admins, { id: newId, ...newAdmin, active: true }]);
    setNewAdmin({ name: "", email: "", privileges: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaUserShield className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">Administrator Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email or privileges..."
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
            onClick={() => handleSort("privileges")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Privileges
          </button>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
        >
          <FaUserPlus /> Add Admin
        </button>
      </div>

      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Privileges</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedAdmins.map((admin) => (
              <tr key={admin.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{admin.name}</td>
                <td className="border border-lightgray p-[3px]">{admin.email}</td>
                <td className="border border-lightgray p-[3px]">{admin.privileges}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {admin.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(admin.id)}>
                    {admin.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(admin.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
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
            <h2 className="text-[20px] font-bold mb-[1rem]">Add New Administrator</h2>
            <input
              type="text"
              placeholder="Name"
              value={newAdmin.name}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Privileges"
              value={newAdmin.privileges}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, privileges: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddAdmin}
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

export default Administrator;
