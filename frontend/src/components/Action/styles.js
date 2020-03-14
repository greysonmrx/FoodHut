import styled from "styled-components";

export const Container = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
`;
