import React from "react";
import { Button } from "./button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2">
      <Button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
      >
        Previous
      </Button>
      {pageNumbers.map((page) => (
        <Button
          key={page}
          className={`px-3 py-1 rounded-md ${currentPage === page ? "" : ""}`}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => onChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};
