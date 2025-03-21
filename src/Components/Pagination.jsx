import { useState } from "react";
import Button from "./Button";

const Pagination = ({ totalItems = 500, itemsPerPage = 8 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "prev" && prev > 1) return prev - 1;
      if (direction === "next" && prev < totalPages) return prev + 1;
      return prev;
    });
  };

  return (
    <div className="flex items-center justify-between py-[1rem]">
      <p className="text-text font-bold">
        Showing {Math.min(itemsPerPage, totalItems)} of {totalItems} results
      </p>

      <div className="flex gap-[10px]">
        <Button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-[4px] py-[2px] border rounded-[5px] bg-lightgray disabled:opacity-50"
        >
          Previous
        </Button>

        <span className="px-[4px] py-[2px] border rounded-[5px] bg-lightgray">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="px-[4px] py-[2px] border rounded-[5px] bg-lightgray disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
