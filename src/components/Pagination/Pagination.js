import React from "react";
import PropTypes from "prop-types";
import { PaginationContainer, PageButton } from "./Pagination.style";

const Pagination = ({ postsPerPage, totoalPageCount, handlePageClick }) => {
  const pageNumbers = [];
  const length = Math.ceil(totoalPageCount / postsPerPage);
  for (let i = 1; i <= length; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => {
            handlePageClick(pageNumber);
          }}
        >
          {pageNumber}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totoalPageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
};

export default Pagination;
