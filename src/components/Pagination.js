import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import PageItem from "react-bootstrap/PageItem";
import "bootstrap/dist/css/bootstrap.min.css";

function PaginationComp(props) {
  const { page, setpage } = props;

  function pageNumberClick(e) {
    setpage(e.target.id);
  }

  function prevClick() {
    let newPage = page;
    newPage > 1 ? setpage(newPage - 1) : setpage(newPage);
  }

  function nextClick() {
    let newPage = page;
    newPage < items.length ? setpage(newPage + 1) : setpage(newPage);
  }

  let items = [];
  for (let number = 1; number <= 38; number++) {
    items.push(
      <PageItem
        onClick={pageNumberClick}
        id={number}
        key={number}
        active={number === page}
      >
        {number}
      </PageItem>
    );
  }

  let pageToDisplay =
    page > 6
      ? items.slice(Number(page - 3), Number(page) + 2)
      : items.slice(Number(page - 1), Number(page) + 5);
  console.log(pageToDisplay);

  return (
    <div className="page">
      <Pagination>
        <Pagination.Prev onClick={prevClick}>&lt; Previous</Pagination.Prev>

        {page > 1 ? items[0] : null}
        {page > 2 ? items[1] : null}
        {page > 3 ? <Pagination.Ellipsis /> : null}
        {pageToDisplay}
        {page < items.length - 4 ? <Pagination.Ellipsis /> : null}
        {page < items.length - 3 ? items[items.length - 2] : null}
        {page < items.length - 2 ? items[items.length - 1] : null}

        <Pagination.Next onClick={nextClick}>Next &gt;</Pagination.Next>
      </Pagination>
    </div>
  );
}

export default PaginationComp;
