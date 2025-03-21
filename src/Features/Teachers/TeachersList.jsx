import { FiEdit, FiTrash, FiEye, FiSearch } from "react-icons/fi";
import Input from "../../Components/Input";
import { useState } from "react";
import Button from "../../Components/Button";

const teachers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    subjects: "Mathematics",
    classes: "Grade 10, Grade 11",
    status: "Active",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    subjects: "English",
    classes: "Grade 9, Grade 12",
    status: "On Leave",
    profilePic: "https://via.placeholder.com/40",
  },
  
];

const TeachersList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-background mt-[1rem] p-[1rem] rounded-[10px] overflow-x-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center px-[3px] py-[2px] gap-[3px] border-lightgray border-2 rounded-[10px]">
          <FiSearch className="text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search teachers by name, subject, or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-[10px] pr-[4px] py-[2px] outline-0 border border-none truncate"
          />
        </div>
        {/* Add New Teacher Button */}
        <Button className="bg-accent text-background px-[10px] py-[5px] rounded-[10px] hover:bg-blue-600 transition">
          Add New Teacher
        </Button>
      </div>
      <table className="w-full table-auto border-collapse mt-[1rem]">
        <thead>
          <tr className="bg-gray-100 text-left ">
            <th className="p-3">Profile</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Subjects</th>
            <th className="p-3">Classes</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-lightgray">
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-t border-text">
              <td className="p-3">
                <img
                  src={teacher.profilePic}
                  alt={teacher.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="p-3">{teacher.name}</td>
              <td className="p-3">{teacher.email}</td>
              <td className="p-3">{teacher.phone}</td>
              <td className="p-3">{teacher.subjects}</td>
              <td className="p-3">{teacher.classes}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    teacher.status === "Active"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {teacher.status}
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <Button className="text-[#183cd1] hover:text-blue-700">
                  <FiEye />
                </Button>
                <Button className="text-[#3da608] hover:text-green-700">
                  <FiEdit />
                </Button>
                <Button className="text-[#ff3600] hover:text-red-700">
                  <FiTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersList;
