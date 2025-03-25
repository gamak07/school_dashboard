import React, { useState } from "react";
import { FaSave, FaToggleOn, FaToggleOff } from "react-icons/fa";

const AdmissionSettings = () => {
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [formPrice, setFormPrice] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [minScore, setMinScore] = useState("");

  const handleSaveSettings = () => {
    // Here you would send these settings to your backend or store them appropriately.
    alert(`Settings saved:
Admission Status: ${admissionOpen ? "Open" : "Closed"}
Form Price: ${formPrice}
Application Deadline: ${applicationDeadline}
Minimum Entrance Score: ${minScore}`);
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header Section */}
      <header className="p-[1rem] bg-background rounded-[10px]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[30px] font-bold text-darkgray">
            Admission Settings
          </h1>
        </div>
      </header>

      {/* Settings Form */}
      <section className="bg-background p-[1rem] rounded-[10px] mt-[1rem]">
        <h2 className="text-[20px] font-bold mb-[1rem]">
          Control Admission Actions
        </h2>
        <div className="">
          {/* Admission Status Toggle */}
          <div className="flex items-center">
            <label className="mr-[4px] text-darkgray font-semibold">
              Admission Status:
            </label>
            <button
              onClick={() => setAdmissionOpen(!admissionOpen)}
              className="flex items-center bg-orange text-background px-[5px] py-[3px] rounded-[10px]">
              {admissionOpen ? (
                <FaToggleOn className="mr-[3px] text-[20px]" />
              ) : (
                <FaToggleOff className="mr-[3px] text-[20px]" />
              )}
              {admissionOpen ? "Open" : "Closed"}
            </button>
          </div>

          {/* Admission Form Price */}
          <div className="mt-[1rem]">
            <label className="block text-darkgray font-semibold mb-[2px]">
              Admission Form Price:
            </label>
            <input
              type="number"
              value={formPrice}
              onChange={(e) => setFormPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full border-2 border-lightgray rounded-[10px] px-[5px] py-[5px] outline-none"
            />
          </div>

          {/* Application Deadline */}
          <div className="mt-[1rem]">
            <label className="block text-darkgray font-semibold mb-[2px]">
              Application Deadline:
            </label>
            <input
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
              className="w-full border-2 border-lightgray rounded-[10px] px-[5px] py-[5px] outline-none"
            />
          </div>

          {/* Admission Criteria - Minimum Entrance Score */}
          <div className="mt-[1rem]">
            <label className="block text-darkgray font-semibold mb-[2px]">
              Minimum Entrance Score:
            </label>
            <input
              type="number"
              value={minScore}
              onChange={(e) => setMinScore(e.target.value)}
              placeholder="Enter minimum score"
              className="w-full border-2 border-lightgray rounded-[10px] px-[5px] py-[5px] outline-none"
            />
          </div>

          {/* Save Button */}
          <div className="mt-[1rem]">
            <button
              onClick={handleSaveSettings}
              className="flex items-center bg-secondary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent"
            >
              <FaSave className="mr-[4px]" />
              Save Settings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionSettings;
