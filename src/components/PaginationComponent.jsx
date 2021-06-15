import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationComponent({
  totalPages,
  active,
  handlePaginationChange,
  handleFirstPagination,
  handleLastPagination,
  handleNextPagination,
  handlePrevPagination,
}) {
  const styles = {
    Pagination: {
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },
  };
  const pages = [];
  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={handlePaginationChange}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div
      className="mt-5 d-flex justify-content-center position-fixed"
      style={styles.Pagination}
    >
      {pages.length > 10 ? (
        <Pagination>
          <Pagination.First onClick={handleFirstPagination} />
          <Pagination.Prev
            disabled={active - 1 === 0}
            onClick={handlePrevPagination}
          />
          <Pagination.Item onClick={handlePaginationChange}>
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis disabled />

          <Pagination.Item
            onClick={handlePaginationChange}
            disabled={active - 2 < 1}
          >
            {active - 2}
          </Pagination.Item>
          <Pagination.Item
            onClick={handlePaginationChange}
            disabled={active - 1 < 1}
          >
            {active - 1}
          </Pagination.Item>
          <Pagination.Item onClick={handlePaginationChange} active>
            {active}
          </Pagination.Item>
          <Pagination.Item
            onClick={handlePaginationChange}
            disabled={active + 1 > pages.length}
          >
            {active + 1}
          </Pagination.Item>
          <Pagination.Item
            onClick={handlePaginationChange}
            disabled={active + 2 > pages.length}
          >
            {active + 2}
          </Pagination.Item>

          <Pagination.Ellipsis disabled />
          <Pagination.Item onClick={handlePaginationChange}>
            {pages.length}
          </Pagination.Item>
          <Pagination.Next
            onClick={handleNextPagination}
            disabled={active + 1 > pages.length}
          />
          <Pagination.Last onClick={handleLastPagination} />
        </Pagination>
      ) : (
        <Pagination>{pages}</Pagination>
      )}
    </div>
  );
}
