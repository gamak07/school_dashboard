import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

const EnrollStudents = () => {
  // Manage the multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // State for form fields
  const [formData, setFormData] = useState({
    // Parent Information
    fatherName: '',
    motherName: '',
    parentContact: '',
    // Bio Data
    studentName: '',
    dob: '',
    gender: '',
    // Medical Details
    bloodGroup: '',
    allergies: '',
    specialNeeds: '',
    // Additional Details
    religion: '',
    hometown: '',
    stateOfOrigin: '',
    nationality: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Navigation handlers for the multi-step form
  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to backend or process it as needed
    alert('Student enrolled successfully!');
  };

  // Render form content based on the current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-[20px] font-semibold mb-[10px]">Parent Information</h3>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="Enter father's name"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                placeholder="Enter mother's name"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Parent Contact</label>
              <input
                type="text"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleInputChange}
                placeholder="Enter contact number"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-[20px] font-semibold mb-[10px]">Bio Data</h3>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                placeholder="Enter student name"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-[20px] font-semibold mb-[10px]">Medical Details</h3>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                placeholder="e.g., O+"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Allergies</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                placeholder="List any allergies"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Special Needs</label>
              <input
                type="text"
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                placeholder="Specify any special needs"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-[20px] font-semibold mb-[10px]">Additional Details</h3>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Religion</label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                placeholder="Enter religion"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Hometown</label>
              <input
                type="text"
                name="hometown"
                value={formData.hometown}
                onChange={handleInputChange}
                placeholder="Enter hometown"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">State of Origin</label>
              <input
                type="text"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleInputChange}
                placeholder="Enter state of origin"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
            <div className="mb-[10px]">
              <label className="block text-darkgray">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                placeholder="Enter nationality"
                className="mt-[4px] block w-full border-2 border-lightgray rounded-[10px] px-[8px] py-[5px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-[1rem] bg-primary min-h-screen">
      {/* Header */}
      <header className="mb-[1rem] bg-background p-[1rem] rounded-[10px]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[30px] font-bold text-darkgray">Enroll Student</h1>
        </div>
      </header>

      {/* Multi-Step Form */}
      <section className="bg-background p-[1rem] rounded-[10px] shadow mb-[1rem]">
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
          <div className="flex justify-between mt-[1rem]">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-primary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent"
              >
                Back
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-primary text-background px-[8px] py-[5px] rounded-[10px] hover:accent ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary text-background px-[8px] py-[5px] rounded hover:bg-accent ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Bulk Import Section */}
      <section className="bg-background p-[1rem] rounded-[10px]">
        <h2 className="text-[20px] font-bold mb-[1rem]">Bulk Import Students</h2>
        <div className="mb-[1rem]">
          <label className="block text-darkgray mb-[10px]">Upload CSV File:</label>
          <input type="file" accept=".csv" className="block w-full" />
        </div>
        <div className="text-darkgray">
          <p>
            Ensure the CSV file contains all necessary fields (Parent Information, Bio Data, Medical Details,
            Religion, Hometown, State of Origin, Nationality, etc.) as required by the system.
          </p>
        </div>
        <button
          type="button"
          className="mt-[10px] flex items-center bg-primary text-background px-[8px] py-[5px] rounded-[10px] hover:bg-accent"
        >
          <FaFileUpload className="mr-[2px]" />
          Import Bulk Data
        </button>
      </section>
    </div>
  );
};

export default EnrollStudents;
