import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  text-align: left;

  span {
    color: rgb(222, 42, 42);
    font-weight: 500;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    margin-bottom: 5px;

    svg:first-child {
      position: absolute;
      left: 10px;
      color: rgba(0, 0, 0, 0.7);
    }

    svg:last-child {
      position: absolute;
      right: 10px;
      color: rgb(222, 42, 42);
    }

    input {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.05);
      border: 2px solid rgba(0, 0, 0, 0.15);
      border-color: ${props =>
        props.error ? "rgb(222, 42, 42)" : "rgba(0, 0, 0, 0.15)"};
      border-radius: 5px;
      padding: 0 35px 0 40px;
    }
  }
`;
