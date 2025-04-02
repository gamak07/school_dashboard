import React, { useState } from "react";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";

const Schedule = () => {
  // Active tab state: "timetable" or "settings"
  const [activeTab, setActiveTab] = useState("timetable");

  // Filter states for timetable
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");

  // Modal state for adding a schedule item
  const [showModal, setShowModal] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    class: "",
    subject: "",
    teacher: "",
    day: "",
    time: "",
    term: "",
    type: "Class", // Options: "Class" or "Activity"
  });

  // Sample timetable data
  const [timetable, setTimetable] = useState([
    {
      id: 1,
      class: "Grade 10",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      day: "Monday",
      time: "08:00 - 09:00",
      term: "Term 1",
      type: "Class",
    },
    {
      id: 2,
      class: "Grade 12",
      subject: "Drama Club",
      teacher: "Ms. Johnson",
      day: "Tuesday",
      time: "10:00 - 11:00",
      term: "Term 1",
      type: "Activity",
    },
  ]);

  // Filter timetable based on selected criteria
  const filteredTimetable = timetable.filter((item) => {
    return (
      (selectedClass === "" || item.class === selectedClass) &&
      (selectedDay === "" || item.day === selectedDay) &&
      (selectedTerm === "" || item.term === selectedTerm)
    );
  });

  // Handler to add a new schedule item
  const handleAddSchedule = () => {
    const newId = timetable.length + 1;
    setTimetable([...timetable, { id: newId, ...newSchedule }]);
    setNewSchedule({
      class: "",
      subject: "",
      teacher: "",
      day: "",
      time: "",
      term: "",
      type: "Class",
    });
    setShowModal(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <h1 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">Timetable / Schedule Management</h1>

      {/* Internal Navigation */}
      <div className="mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        <nav className="flex gap-x-[1rem]">
          <button
            onClick={() => setActiveTab("timetable")}
            className={`py-[5px] px-[8px] ${
              activeTab === "timetable" ? "border-b-2 border-accent text-darkgray" : ""
            }`}
          >
            Timetable
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-[5px] px-[8px] ${
              activeTab === "settings" ? "border-b-2 border-accent text-darkgray" : ""
            }`}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Timetable Section */}
      {activeTab === "timetable" && (
        <div>
          {/* Filter Options */}
          <div className="flex flex-wrap gap-x-[4px] mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border-2 border-lightgray py-[5px] px-[8px] rounded-[10px]"
            >
              <option value="">All Classes</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="border-2 border-lightgray py-[5px] px-[8px] rounded-[10px]"
            >
              <option value="">All Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="border-2 border-lightgray py-[5px] px-[8px] rounded-[10px]"
            >
              <option value="">All Terms</option>
              <option value="Term 1">Term 1</option>
              <option value="Term 2">Term 2</option>
            </select>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center bg-secondary hover:bg-gaccent text-background py-[5px] px-[8px] rounded-[10px]"
            >
              <FiPlus className="mr-[2px]" /> Add Schedule
            </button>
          </div>

          {/* Timetable Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-background border border-lightgray">
              <thead>
                <tr>
                  <th className="py-[2px] px-[4px] border border-lightgray">Class</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Subject / Activity</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Teacher</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Day</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Time</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Term</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Type</th>
                  <th className="py-[2px] px-[4px] border border-lightgray">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTimetable.map((item) => (
                  <tr key={item.id} className="hover:bg-lightgray">
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.class}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.subject}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.teacher}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.day}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.time}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.term}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray">{item.type}</td>
                    <td className="py-[2px] px-[4px] border border-lightgray flex gap-x-[2px]">
                      <button className="text-green">
                        <FiEdit />
                      </button>
                      <button
                        onClick={() =>
                          setTimetable(timetable.filter((schedule) => schedule.id !== item.id))
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

          {/* Modal for Adding New Schedule */}
          {showModal && (
            <div className="fixed inset-[0] flex items-center justify-center opacity-80">
              <div className="bg-accent p-[1rem] rounded-[10px] w-1/3">
                <h2 className="text-[20px] font-bold mb-[1rem] text-background">Add New Schedule</h2>
                <div className="mb-[1rem]">
                  <label className="block text-background">Class</label>
                  <input
                    type="text"
                    value={newSchedule.class}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, class: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                    placeholder="e.g., Grade 10"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Subject / Activity</label>
                  <input
                    type="text"
                    value={newSchedule.subject}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, subject: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                    placeholder="e.g., Mathematics / Sports"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Teacher</label>
                  <input
                    type="text"
                    value={newSchedule.teacher}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, teacher: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                    placeholder="Teacher Name"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Day</label>
                  <select
                    value={newSchedule.day}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, day: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  >
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Time</label>
                  <input
                    type="text"
                    value={newSchedule.time}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, time: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                    placeholder="e.g., 08:00 - 09:00"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Term</label>
                  <select
                    value={newSchedule.term}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, term: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  >
                    <option value="">Select Term</option>
                    <option value="Term 1">Term 1</option>
                    <option value="Term 2">Term 2</option>
                  </select>
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-background">Type</label>
                  <select
                    value={newSchedule.type}
                    onChange={(e) =>
                      setNewSchedule({ ...newSchedule, type: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  >
                    <option value="Class">Class</option>
                    <option value="Activity">Activity</option>
                  </select>
                </div>
                <div className="flex justify-end gap-x-[4px]">
                  <button
                    onClick={() => setShowModal(false)}
                    className="py-[5px] px-[8px] bg-darkgray text-background rounded-[10px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddSchedule}
                    className="py-[5px] px-[8px] bg-blue-500 text-text bg-background rounded-[10px]"
                  >
                    Save Schedule
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Settings Section */}
      {activeTab === "settings" && (
        <div>
          <h2 className="text-[20px] font-bold bg-background p-[1rem] mb-[1rem] rounded-[10px]">Timetable Settings</h2>
          <div className="mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Max Classes/Activities per Day
              </label>
              <input
                type="number"
                defaultValue={8}
                className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
              />
            </div>
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Conflict Warning Threshold (minutes)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
              />
            </div>
            <button className="bg-secondary text-background rounded-[10px] py-[5px] px-[8px]">
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
