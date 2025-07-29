import { useMemo } from "react";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";

function Pagination({ currentPage, totalPage, onPageChange }) {
  const VISIBLE_PAGES = 7;

  const paginationData = useMemo(() => {
    if (totalPage <= VISIBLE_PAGES) {
      return {
        showFirst: false,
        showLast: false,
        startPage: 1,
        endPage: totalPage,
      };
    }

    if (currentPage <= 3) {
      return {
        showFirst: false,
        showLast: true,
        startPage: 1,
        endPage: 3,
      };
    }

    if (currentPage >= totalPage - 2) {
      return {
        showFirst: true,
        showLast: false,
        startPage: totalPage - 2,
        endPage: totalPage,
      };
    }

    return {
      showFirst: true,
      showLast: true,
      startPage: currentPage ,
      endPage: currentPage ,
    };
  }, [currentPage, totalPage]);

  const renderPageButton = (page, isActive = false, className = "") => (
    <button
      key={page}
      className={`pagination-number ${isActive ? "active" : ""} ${className}`}
      onClick={() => onPageChange(page)}
      disabled={isActive}
    >
      {page}
    </button>
  );

  const renderPages = (start, end) => {
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(renderPageButton(i, currentPage === i));
    }
    return pages;
  };

  const { showFirst, showLast, startPage, endPage } = paginationData;

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        className="prev-btn arrow-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={24} stroke="#AB8BFF" />
      </button>

      {/* First page */}
      {showFirst && (
        <>
          {renderPageButton(1)}
          <button className="ellipsis">...</button>
        </>
      )}

      {/* Visible pages */}
      {renderPages(startPage, endPage)}

      {/* Last page */}
      {showLast && (
        <>
          <button className="ellipsis">...</button>
          {renderPageButton(totalPage)}
        </>
      )}

      {/* Next Button */}
      <button
        className="next-btn arrow-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <ChevronRight size={24} stroke="#AB8BFF" />
      </button>
    </div>
  );
}

export default Pagination;



