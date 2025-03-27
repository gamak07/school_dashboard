import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const initialStaff = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Bursary",
    department: "Finance",
    active: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Accountant",
    department: "Administration",
    active: false,
  },
];

function Accountant() {
  const [staff, setStaff] = useState(initialStaff);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
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

  const filteredStaff = staff.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && member.active) ||
      (filterStatus === "inactive" && !member.active);
    return matchesSearch && matchesStatus;
  });

  const sortedStaff = sortField
    ? [...filteredStaff].sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      )
    : filteredStaff;

  const toggleActivation = (id) => {
    setStaff(
      staff.map((member) =>
        member.id === id ? { ...member, active: !member.active } : member
      )
    );
  };

  const handleDelete = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  const handleEdit = (id) => {
    const memberToEdit = staff.find((member) => member.id === id);
    if (!memberToEdit) return;
    const name = prompt("Enter new name", memberToEdit.name);
    const email = prompt("Enter new email", memberToEdit.email);
    const role = prompt("Enter new role", memberToEdit.role);
    const department = prompt("Enter new department", memberToEdit.department);
    if (name && email && role && department) {
      setStaff(
        staff.map((member) =>
          member.id === id
            ? { ...member, name, email, role, department }
            : member
        )
      );
    }
  };

  const handleAddStaff = () => {
    const newId = staff.length ? Math.max(...staff.map((m) => m.id)) + 1 : 1;
    setStaff([...staff, { id: newId, ...newStaff, active: true }]);
    setNewStaff({ name: "", email: "", role: "", department: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaFileInvoiceDollar className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">
          Bursary / Accountant Management
        </h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, or role..."
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
            onClick={() => handleSort("role")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Role
          </button>
        </div>
        <button
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
          onClick={() => setIsAddModalOpen(true)}
        >
          <FaUserPlus /> Add Staff
        </button>
      </div>

      <div className="w-full rounded-[10px] p-[1rem] mb-[1rem] bg-background">
        <table className="w-full border-lightgray border-collapse border">
          <thead>
            <tr className="bg-darkgray">
              <th className="border border-lightgray p-[3px] text-left">Name</th>
              <th className="border border-lightgray p-[3px] text-left">Email</th>
              <th className="border border-lightgray p-[3px] text-left">Role</th>
              <th className="border border-lightgray p-[3px] text-left">Department</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedStaff.map((member) => (
              <tr key={member.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{member.name}</td>
                <td className="border border-lightgray p-[3px]">{member.email}</td>
                <td className="border border-lightgray p-[3px]">{member.role}</td>
                <td className="border border-lightgray p-[3px]">{member.department}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {member.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(member.id)}>
                    {member.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(member.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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

      {/* Modal for adding new staff */}
      {isAddModalOpen && (
        <div className="fixed inset-[0] flex items-center justify-center bg-text opacity-90 z-50">
          <div className="bg-background rounded-[10px] p-[1rem] w-[50%]">
            <h2 className="text-[20px] font-bold mb-[1rem]">Add New Staff</h2>
            <input
              type="text"
              placeholder="Name"
              value={newStaff.name}
              onChange={(e) =>
                setNewStaff({ ...newStaff, name: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="email"
              placeholder="Email"
              value={newStaff.email}
              onChange={(e) =>
                setNewStaff({ ...newStaff, email: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Role (e.g., Bursary, Accountant)"
              value={newStaff.role}
              onChange={(e) =>
                setNewStaff({ ...newStaff, role: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Department"
              value={newStaff.department}
              onChange={(e) =>
                setNewStaff({ ...newStaff, department: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <div className="flex justify-end gap-[5px]">
              <button
                onClick={handleAddStaff}
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

export default Accountant;
