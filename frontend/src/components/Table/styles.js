import styled from "styled-components";
import { lighten } from "polished";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  table {
    background: #ffffff;
    width: 100%;
    padding: 0px 25px 20px 25px;

    th {
      text-align: left;
      padding: 20px 8px;
      color: #999999;
      font-size: 16px;
    }

    td {
      text-align: left;
      padding: 8px 15px;
      font-weight: 500;
    }

    img {
      border-radius: 10px;
    }
  }
`;

export const Table = styled.table`
  background: #ffffff;
  width: 100%;
  padding: 0px 25px 20px 25px;

  th {
    text-align: left;
    padding: 20px 8px;
    color: #999999;
    font-size: 16px;
  }

  td {
    text-align: left;
    padding: 8px 15px;
    font-weight: 500;
  }

  img {
    border-radius: 10px;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  padding: 10px;
  max-height: 100%;
  background: #ffffff;
  border-radius: 10px;
`;

export const Pagination = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 0 5px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.disabled
      ? lighten(0.3, "#f6540d")
      : props.selected
      ? "#f5f5f5"
      : "#f6540d"};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  border: 2px solid transparent;
  border-color: ${props => (props.selected ? "#f6540d " : "#f5f5f5")};
  border-radius: 5px;
  color: ${props => (props.selected ? "#f6540d" : "#FFFFFF")};
  margin: 0 3px;

  p {
    font-weight: bold;
    font-size: 15px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  svg {
    font-size: 20px;
  }
`;
