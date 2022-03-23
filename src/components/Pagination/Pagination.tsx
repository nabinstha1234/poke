import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type Props = {
  pageCount: number;
  onPageChange: (data: any) => void;
  pageNumber: number;
};

const Pagination = (props: Props) => {
  const { pageCount, onPageChange, pageNumber } = props;

  return (
    <div className={styles["pagination-section"]}>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={onPageChange}
        forcePage={pageNumber}
      />
    </div>
  );
};

export default Pagination;
