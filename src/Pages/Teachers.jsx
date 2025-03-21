import React from "react";
import HeaderSection from "../Features/Teachers/HeaderSection";
import TeachersList from "../Features/Teachers/TeachersList";
import Pagination from "../Components/Pagination";

const Teachers = () => {
  return (
    <div className="bg-primary h-[90vh] w-full p-[1rem]">
      <HeaderSection />
      <TeachersList />
      <Pagination />
    </div>
  );
};

export default Teachers;
