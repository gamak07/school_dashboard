import React, { useState } from "react";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiVideo,
  FiClock,
  FiSettings,
} from "react-icons/fi";

const Virtual = () => {
  const [activeTab, setActiveTab] = useState("resources");
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Introduction to Algebra",
      type: "Video",
      subject: "Mathematics",
      class: "10th Grade",
      link: "https://example.com/video1",
    },
    {
      id: 2,
      title: "Shakespearean Literature",
      type: "Document",
      subject: "English",
      class: "11th Grade",
      link: "https://example.com/doc1",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newResource, setNewResource] = useState({
    title: "",
    type: "",
    subject: "",
    class: "",
    link: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddResource = () => {
    const newId = resources.length + 1;
    setResources([...resources, { id: newId, ...newResource }]);
    setNewResource({ title: "", type: "", subject: "", class: "", link: "" });
    setShowModal(false);
  };

  return (
    <div className="p-[1rem] bg-primary">
      <h1 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">
        E-Learning / Virtual Learning Management
      </h1>

      {/* Internal Navbar for Tabs */}
      <div className="mb-[1rem] p-[1rem] bg-background rounded-[10px]">
        <nav className="flex gap-x-[1rem]">
          <button
            onClick={() => setActiveTab("resources")}
            className={`py-[5px] px-[8px] ${
              activeTab === "resources"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
          >
            <FiVideo className="inline mr-[2px]" /> Resources
          </button>
          <button
            onClick={() => setActiveTab("liveSessions")}
            className={`py-[5px] px-[8px] ${
              activeTab === "liveSessions"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
          >
            <FiClock className="inline mr-[2px]" /> Live Sessions
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-[5px] px-[8px] ${
              activeTab === "settings"
                ? "border-b-2 border-accent text-darkgray"
                : ""
            }`}
          >
            <FiSettings className="inline mr-[2px]" /> Settings
          </button>
        </nav>
      </div>

      {/* Resources Tab */}
      {activeTab === "resources" && (
        <div>
          <div className="flex flex-wrap gap-x-[4px] mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            <input
              type="text"
              placeholder="Search Resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 border-lightgray px-[8px] py-[5px] rounded-[10px] w-full outline-0 md:w-1/3"
            />
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center bg-secondary hover:bg-accent text-background py-[5px] px-[8px] rounded-[10px] mt-[5px] md:mt-[0]"
            >
              <FiPlus className="mr-[2px]" /> Add Resource
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-background border border-lightgray">
              <thead>
                <tr>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Title
                  </th>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Type
                  </th>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Subject
                  </th>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Class
                  </th>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Link
                  </th>
                  <th className="py-[5px] px-[8px] border border-lightgray">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-lightgray">
                    <td className="py-[5px] px-[8px] border border-lightgray">
                      {resource.title}
                    </td>
                    <td className="py-[5px] px-[8px] border border-lightgray">
                      {resource.type}
                    </td>
                    <td className="py-[5px] px-[8px] border border-lightgray">
                      {resource.subject}
                    </td>
                    <td className="py-[5px] px-[8px] border border-lightgray">
                      {resource.class}
                    </td>
                    <td className="py-[5px] px-[8px] border border-lightgray">
                      <a
                        href={resource.link}
                        className="text-orange hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </a>
                    </td>
                    <td className="py-2 px-4 border flex space-x-2">
                      <button className="text-green">
                        <FiEdit />
                      </button>
                      <button
                        onClick={() =>
                          setResources(
                            resources.filter((r) => r.id !== resource.id)
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

          {/* Modal for Adding a New Resource */}
          {showModal && (
            <div className="fixed inset-[0] flex items-center justify-center bg-opacity-80">
              <div className="bg-accent p-[1rem] rounded-[10px] w-1/3">
                <h2 className="text-[20px] font-bold mb-[1rem] text-background">
                  Add New Resource
                </h2>
                <div className="mb-[1rem]">
                  <label className="block text-darkgray">Title</label>
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) =>
                      setNewResource({ ...newResource, title: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-darkgray">Type</label>
                  <select
                    value={newResource.type}
                    onChange={(e) =>
                      setNewResource({ ...newResource, type: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  >
                    <option value="">Select Type</option>
                    <option value="Video">Video</option>
                    <option value="Document">Document</option>
                    <option value="Link">External Link</option>
                  </select>
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-darkgray">Subject</label>
                  <input
                    type="text"
                    value={newResource.subject}
                    onChange={(e) =>
                      setNewResource({
                        ...newResource,
                        subject: e.target.value,
                      })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-darkgray">Class</label>
                  <input
                    type="text"
                    value={newResource.class}
                    onChange={(e) =>
                      setNewResource({ ...newResource, class: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  />
                </div>
                <div className="mb-[1rem]">
                  <label className="block text-darkgray">Resource Link</label>
                  <input
                    type="text"
                    value={newResource.link}
                    onChange={(e) =>
                      setNewResource({ ...newResource, link: e.target.value })
                    }
                    className="w-full border border-darkgray rounded-[10px] py-[5px] px-[8px] outline-0"
                  />
                </div>
                <div className="flex justify-end gap-x-[5px]">
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded-[10px] py-[5px] px-[8px] bg-darkgray text-background"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddResource}
                    className="rounded-[10px] py-[5px] px-[8px] text-text bg-background"
                  >
                    Save Resource
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Live Sessions Tab */}
      {activeTab === "liveSessions" && (
        <div>
          <h2 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            Live Sessions
          </h2>
          <p className="mb-[1rem]">
            Manage live classes and virtual sessions here. This section can be
            extended to include scheduling interfaces, meeting links, and
            real-time attendance tracking.
          </p>
          <div className="border-dashed border-2 border-gray-300 p-4 rounded">
            <p className="text-gray-500">
              Live session management interface goes here.
            </p>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div>
          <h2 className="text-[20px] font-bold mb-[1rem] bg-background p-[1rem] rounded-[10px]">
            E-Learning Settings
          </h2>
          <div className="bg-background p-[1rem] rounded-[10px]">
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Who can access online resources?
              </label>
              <select className="w-full border border-lightgray rounded py-[5px] px-[8px] rounded-[10px]">
                <option value="All">All Students</option>
                <option value="Enrolled">Enrolled Students Only</option>
                <option value="Custom">Custom Group</option>
              </select>
            </div>
            <div className="mb-[1rem]">
              <label className="block text-darkgray mb-[5px]">
                Maximum featured resources per class
              </label>
              <input
                type="number"
                defaultValue={10}
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

export default Virtual;
