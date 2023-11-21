"use client";

import * as React from "react";
import { Pagination } from "react-headless-pagination";

type Props = {};
export function StyledPagination({}: Props) {
  let page = 1;
  function handlePageChange() {
    page++;
  }
  return (
    <>
      Current page: {page + 1}
      <Pagination
        totalPages={10}
        edgePageCount={3}
        middlePagesSiblingCount={2}
        // {...args}
        currentPage={page}
        setCurrentPage={handlePageChange}
        className=""
        truncableText="..."
        truncableClassName=""
      >
        <Pagination.PrevButton className="">Previous</Pagination.PrevButton>

        <nav className="flex flex-grow justify-center">
          <ul className="flex items-center">
            <Pagination.PageButton
              activeClassName=""
              inactiveClassName=""
              className=""
            />
          </ul>
        </nav>

        <Pagination.NextButton className="">Next</Pagination.NextButton>
      </Pagination>
    </>
  );
}
