import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaUsers,
} from "react-icons/fa";

const initialStaffs = [
  {
    id: 1,
    name: "Laura Adams",
    email: "laura@example.com",
    department: "HR",
    position: "Coordinator",
    active: true,
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    department: "Maintenance",
    position: "Technician",
    active: false,
  },
];

function GeneralStaffs() {
  const [staffs, setStaffs] = useState(initialStaffs);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
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

  const filteredStaffs = staffs.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && staff.active) ||
      (filterStatus === "inactive" && !staff.active);
    return matchesSearch && matchesStatus;
  });

  const sortedStaffs = sortField
    ? [...filteredStaffs].sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      )
    : filteredStaffs;

  const toggleActivation = (id) => {
    setStaffs(
      staffs.map((staff) =>
        staff.id === id ? { ...staff, active: !staff.active } : staff
      )
    );
  };

  const handleDelete = (id) => {
    setStaffs(staffs.filter((staff) => staff.id !== id));
  };

  const handleEdit = (id) => {
    const staffToEdit = staffs.find((staff) => staff.id === id);
    if (!staffToEdit) return;
    const name = prompt("Enter new name", staffToEdit.name);
    const email = prompt("Enter new email", staffToEdit.email);
    const department = prompt("Enter new department", staffToEdit.department);
    const position = prompt("Enter new position", staffToEdit.position);
    if (name && email && department && position) {
      setStaffs(
        staffs.map((staff) =>
          staff.id === id
            ? { ...staff, name, email, department, position }
            : staff
        )
      );
    }
  };

  const handleAddStaff = () => {
    const newId = staffs.length ? Math.max(...staffs.map((s) => s.id)) + 1 : 1;
    setStaffs([...staffs, { id: newId, ...newStaff, active: true }]);
    setNewStaff({ name: "", email: "", department: "", position: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <div className="text-[30px] font-bold mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <FaUsers className="text-[20px] text-green" />
        <h1 className="text-[30px] font-bold">General Staff Management</h1>
      </div>

      <div className="flex flex-wrap gap-[4px] mb-[1rem] bg-background rounded-[10px] p-[1rem]">
        <input
          type="text"
          placeholder="Search by name, email, department, or position..."
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
            onClick={() => handleSort("department")}
            className="bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent rounded-[10px]"
          >
            Sort by Department
          </button>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-[3px] rounded-[10px] bg-secondary text-background px-[8px] py-[5px] rounded hover:bg-accent"
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
              <th className="border border-lightgray p-[3px] text-left">Department</th>
              <th className="border border-lightgray p-[3px] text-left">Position</th>
              <th className="border border-lightgray p-[3px] text-left">Status</th>
              <th className="border border-lightgray p-[3px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedStaffs.map((staff) => (
              <tr key={staff.id} className="hover:bg-lightgray">
                <td className="border border-lightgray p-[3px]">{staff.name}</td>
                <td className="border border-lightgray p-[3px]">{staff.email}</td>
                <td className="border border-lightgray p-[3px]">{staff.department}</td>
                <td className="border border-lightgray p-[3px]">{staff.position}</td>
                <td className="border border-lightgray p-[3px] flex items-center">
                  <span className="mr-[2px]">
                    {staff.active ? "Active" : "Inactive"}
                  </span>
                  <button onClick={() => toggleActivation(staff.id)}>
                    {staff.active ? (
                      <FaToggleOn color="green" size={20} />
                    ) : (
                      <FaToggleOff color="red" size={20} />
                    )}
                  </button>
                </td>
                <td className="border border-lightgray p-[3px] flex gap-[2px]">
                  <button
                    onClick={() => handleEdit(staff.id)}
                    className="text-green"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(staff.id)}
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
              placeholder="Department"
              value={newStaff.department}
              onChange={(e) =>
                setNewStaff({ ...newStaff, department: e.target.value })
              }
              className="border border-lightgray rounded-[10px] px-[8px] py-[1rem] w-full mb-[10px]"
            />
            <input
              type="text"
              placeholder="Position"
              value={newStaff.position}
              onChange={(e) =>
                setNewStaff({ ...newStaff, position: e.target.value })
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

export default GeneralStaffs;
