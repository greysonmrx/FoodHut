import React from "react";
import PropTypes from "prop-types";
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage
} from "react-icons/md";

import { Container, Scroll, Pagination, Buttons, Button } from "./styles";

export default function Table({ columns, data, pagination, onClick }) {
  function renderCells(object) {
    let cells = [];

    Object.keys(object).map(key => {
      cells.push(<td key={Math.random()}>{object[key]}</td>);
    });

    return cells;
  }

  function getVisiblePages(total, page) {
    const pages = [];

    if (total <= 3) {
      for (let i = 1; i <= total; i++) {
        pages.push(
          <Button selected={page === i} key={i} onClick={() => onClick(i)}>
            <p>{i}</p>
          </Button>
        );
      }
    } else if (page !== total && page !== 1) {
      for (let i = -1; i < 2; i++) {
        pages.push(
          <Button
            selected={page === page + i}
            key={page + i}
            onClick={() => onClick(page + i)}
          >
            <p>{page + i}</p>
          </Button>
        );
      }
    } else if (page === 1) {
      for (let i = 1; i <= 3; i++) {
        pages.push(
          <Button selected={page === i} key={i} onClick={() => onClick(i)}>
            <p>{i}</p>
          </Button>
        );
      }
    } else {
      pages.push(
        <Button
          selected={page === total - 2}
          onClick={() => onClick(total - 2)}
          key={total - 2}
        >
          <p>{total - 2}</p>
        </Button>
      );
      pages.push(
        <Button
          selected={page === total - 1}
          onClick={() => onClick(total - 1)}
          key={total - 1}
        >
          <p>{total - 1}</p>
        </Button>
      );
      pages.push(
        <Button
          selected={page === total}
          onClick={() => onClick(total)}
          key={total}
        >
          <p>{total}</p>
        </Button>
      );
    }

    return pages;
  }

  return (
    <Container>
      <Scroll>
        <table>
          <thead>
            <tr>
              {columns.map(item => (
                <th key={Math.random()}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={Math.random()}>{renderCells(item)}</tr>
            ))}
          </tbody>
        </table>
      </Scroll>
      {pagination && (
        <Pagination>
          <i>
            Mostrando <b>{pagination.sizePerPage}</b> de{" "}
            <b>{pagination.showTotalSize}</b> resultados.
          </i>
          <Buttons>
            <Button
              disabled={!pagination.canPreviousPage}
              onClick={() => onClick(1)}
            >
              <MdFirstPage />
            </Button>
            <Button
              disabled={!pagination.canPreviousPage}
              onClick={() => onClick(pagination.currentPage - 1)}
            >
              <MdChevronLeft />
            </Button>
            {getVisiblePages(pagination.totalPages, pagination.currentPage)}
            <Button
              disabled={!pagination.canNextPage}
              onClick={() => onClick(pagination.currentPage + 1)}
            >
              <MdChevronRight />
            </Button>
            <Button
              disabled={!pagination.canNextPage}
              onClick={() => onClick(pagination.totalPages)}
            >
              <MdLastPage />
            </Button>
          </Buttons>
        </Pagination>
      )}
    </Container>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.object,
  onClick: PropTypes.func
};

Table.defaultProps = {
  pagination: null,
  onClick: null
};
