// CBTExamSettings.jsx
import React, { useState } from "react";
import {
  FaClock,
  FaListOl,
  FaInfoCircle,
  FaPenFancy,
  FaSave,
} from "react-icons/fa";

const Instructions = () => {
  const [duration, setDuration] = useState(60);
  const [maxQuestions, setMaxQuestions] = useState(50);
  const [minQuestions, setMinQuestions] = useState(10);
  const [instructions, setInstructions] = useState(
    "Please read the exam instructions carefully before starting the test. Ensure you have a stable internet connection and a quiet environment."
  );

  const handleSave = (e) => {
    e.preventDefault();
    // Here you can call your API to persist these settings.
    console.log("Exam Settings Saved:", {
      duration,
      maxQuestions,
      minQuestions,
      instructions,
    });
    alert("Exam settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-primary p-[1rem]">
      <div className="mx-auto bg-background p-[1rem] mb-[1rem] rounded-[10px]">
        <h1 className="text-[30px] font-bold text-darkgray mb-[1rem] flex items-center gap-[3px] border-b-2 border-lightgray pb-[1rem]">
          <FaPenFancy className="text-green" /> CBT Exam Settings
        </h1>
        <form onSubmit={handleSave} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-[4px]">
            {/* Exam Duration */}
            <div className="flex-1">
              <label
                htmlFor="duration"
                className="block text-darkgray font-medium mb-[5px]"
              >
                <FaClock className="inline-block mr-[2px]" />
                Time Duration (minutes)
              </label>
              <input
                id="duration"
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
              />
            </div>

            {/* Maximum Questions */}
            <div className="flex-1">
              <label
                htmlFor="maxQuestions"
                className="block text-darkgray font-medium mb-[5px]"
              >
                <FaListOl className="inline-block mr-[2px]" />
                Maximum Questions
              </label>
              <input
                id="maxQuestions"
                type="number"
                min="1"
                value={maxQuestions}
                onChange={(e) => setMaxQuestions(e.target.value)}
                className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
              />
            </div>

            {/* Minimum Questions */}
            <div className="flex-1">
              <label
                htmlFor="minQuestions"
                className="block text-darkgray font-medium mb-[5px]"
              >
                <FaListOl className="inline-block mr-[2px]" />
                Minimum Questions
              </label>
              <input
                id="minQuestions"
                type="number"
                min="1"
                value={minQuestions}
                onChange={(e) => setMinQuestions(e.target.value)}
                className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
              />
            </div>
          </div>

          {/* Additional Instructions */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-darkgray font-medium mb-[5px]"
            >
              <FaInfoCircle className="inline-block mr-[2px]" />
              Additional Exam Instructions
            </label>
            <textarea
              id="instructions"
              rows="5"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-[8px] py-[5px] border-2 border-lightgray rounded-[10px] outline-none"
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-[2px] bg-secondary hover:bg-accent text-white font-semibold px-[8px] py-[5px] rounded-[10px]"
            >
              <FaSave />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Instructions;
