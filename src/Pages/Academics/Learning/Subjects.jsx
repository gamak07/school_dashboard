import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const Subjects = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("classSubjects");

  // Sample data for subjects
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      class: "10th Grade",
      term: "Term 1",
      teacher: "John Doe",
      type: "Core",
    },
    {
      id: 2,
      name: "Science",
      class: "9th Grade",
      term: "Term 2",
      teacher: "Jane Smith",
      type: "Core",
    },
    {
      id: 3,
      name: "Art",
      class: "8th Grade",
      term: "Term 1",
      teacher: "",
      type: "Elective",
    },
  ]);

  // Filter state for "Class Subjects" tab
  const [filterClass, setFilterClass] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  // Settings state
  const [registrationOption, setRegistrationOption] = useState("Teachers");
  const [maxSubjects, setMaxSubjects] = useState(6);

  // Filter subjects based on selected class and term
  const filteredSubjects = subjects.filter((subject) => {
    return (
      (filterClass === "" || subject.class === filterClass) &&
      (filterTerm === "" || subject.term === filterTerm)
    );
  });

  // Handler to assign or update teacher for a subject
  const handleAssignTeacher = (id, newTeacher) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, teacher: newTeacher } : subject
      )
    );
  };

  return (
    <div className="p-[1rem] bg-primary">
      <h1 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">
        Subjects Management
      </h1>

      {/* Internal Navbar for tabs */}
      <div className="mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        <nav className="flex gap-x-[1rem]">
          <button
            className={`py-[5px] px-[8px] ${
              activeTab === "classSubjects"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
            onClick={() => setActiveTab("classSubjects")}
          >
            Class Subjects
          </button>
          <button
            className={`py-[5px] px-[8px] ${
              activeTab === "assignTeachers"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
            onClick={() => setActiveTab("assignTeachers")}
          >
            Assign Teachers
          </button>
          <button
            className={`py-[5px] px-[8px] ${
              activeTab === "settings"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Class Subjects Tab */}
      {activeTab === "classSubjects" && (
        <div>
          {/* Filter Options */}
          <div className="flex flex-wrap gap-x-[4px] mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="border-2 border-lightgray py-[5px] px-[8px] rounded-[10px]"
            >
              <option value="">All Classes</option>
              <option value="10th Grade">10th Grade</option>
              <option value="9th Grade">9th Grade</option>
              <option value="8th Grade">8th Grade</option>
            </select>
            <select
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
              className="border-2 border-lightgray py-[5px] px-[8px] rounded-[10px]"
            >
              <option value="">All Terms</option>
              <option value="Term 1">Term 1</option>
              <option value="Term 2">Term 2</option>
            </select>
            <button className="flex items-center bg-primary hover:bg-accent text-background py-[5px] px-[8px] rounded-[10px]">
              <FiPlus className="mr-[2px]" /> Add Subject
            </button>
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto bg-background p-[1rem] rounded-[10px]">
            <table className="min-w-full table-auto border-lightgray">
              <thead className="text-left">
                <tr>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Subject Name
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Class
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Term
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Type
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Teacher
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((subject) => (
                  <tr key={subject.id} className="hover:bg-lightgray">
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.name}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.class}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.term}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.type}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.teacher || "Unassigned"}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray flex gap-x-[3px]">
                      <button className="text-green">
                        <FiEdit />
                      </button>
                      <button
                        onClick={() =>
                          setSubjects(
                            subjects.filter((s) => s.id !== subject.id)
                          )
                        }
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
        </div>
      )}

      {/* Assign Teachers Tab */}
      {activeTab === "assignTeachers" && (
        <div>
          <h2 className="text-[20px] font-bold mb-[1rem] p-[1rem] rounded-[10px] bg-background">
            Assign/ Reassign Subject Teachers
          </h2>
          <div className="overflow-x-auto bg-background p-[1rem] rounded-[10px]">
            <table className="min-w-full text-left border border-lightgray">
              <thead>
                <tr>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Subject Name
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Type
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Assigned Teacher
                  </th>
                  <th className="py-[2px] px-[4px] border border-lightgray">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id} className="hover:bg-lightgray">
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.name}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.type}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray">
                      {subject.teacher || "Unassigned"}
                    </td>
                    <td className="py-[2px] px-[4px] border border-lightgray flex gap-x-[2px]">
                      <button
                        className="text-green"
                        onClick={() => {
                          // Replace prompt with a proper form or modal in a real implementation
                          const newTeacher = prompt(
                            `Assign teacher for ${subject.name}:`,
                            subject.teacher
                          );
                          if (newTeacher !== null) {
                            handleAssignTeacher(subject.id, newTeacher);
                          }
                        }}
                      >
                        <FiEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div>
          <h2 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            Subjects Settings
          </h2>
          <div className="bg-background p-[1rem] rounded-[10px]">
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Who can register subjects?
              </label>
              <select
                value={registrationOption}
                onChange={(e) => setRegistrationOption(e.target.value)}
                className="w-full border border-lightgray rounded py-[5px] px-[8px] rounded-[10px]"
              >
                <option value="Teachers">Teachers</option>
                <option value="Admin">Admin</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Maximum subjects per term
              </label>
              <input
                type="number"
                value={maxSubjects}
                onChange={(e) => setMaxSubjects(Number(e.target.value))}
                className="w-full border border-lightgray rounded py-[5px] px-[8px] rounded-[10px]"
              />
            </div>
            <button className="bg-secondary text-background py-[5px] px-[8px] rounded-[10px]">
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjects;
