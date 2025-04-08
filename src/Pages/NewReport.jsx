import React from "react";
import Header from "../Features/NewReport/Header";
import SelectReport from "../Features/NewReport/SelectReport";
import ReportParameters from "../Features/NewReport/ReportParameters";
import ReportReview from "../Features/NewReport/ReportReview";

const NewReport = () => {
  return (
    <div className="h-screen bg-background overflow-y-auto">
      <Header />
      <div className="h-[90vh]">
        <div className="px-[4rem]">
          <SelectReport />
        </div>
        <div className="mt-[1rem] px-[4rem] flex gap-[1rem]">
          <ReportParameters />
          <ReportReview />
        </div>
      </div>
    </div>
  );
};

export default NewReport;
