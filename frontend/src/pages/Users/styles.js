import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100%;

  h1 {
    font-size: 35px;
    font-weight: 800;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  flex: 1;
  padding: 10px 15px;
  border-radius: 8px;
  height: 45px;

  input {
    background: none;
    border: none;
    outline: none;
    height: 100%;
    margin-left: 15px;
    font-size: 15px;
    color: #212121;
    width: 100%;
  }
`;

export const ActionContent = styled.div`
  display: flex;
`;

export const TableContent = styled.div`
  height: calc(100% - 200px);
`;
