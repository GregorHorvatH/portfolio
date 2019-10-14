// core
import React from 'react';
import ReactPaginate from 'react-paginate';

// styles
import './Pagination.scss';

/**
 * https://www.npmjs.com/package/react-paginate
 * @param {pageCount} Number - Required. The total number of pages.
 * @param {initialPage} Number - The initial page selected.
 * @param {onPageChange} Function - The method to call when a page is clicked. Exposes the current page object as an argument.
 */
const Pagination = ({ pageCount, initialPage, onPageChange }) => (
  <div className="row justify-content-center">
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      initialPage={initialPage}

      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}

      containerClassName={'pagination'}
      subContainerClassName={'page-item'}
      activeClassName={'active'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      onPageChange={onPageChange}
    />
  </div>
);

export default Pagination;
