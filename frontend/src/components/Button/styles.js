import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f6540d;
  color: #ffffff;
  opacity: ${props => (props.disabled ? ".35" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.3s;

  :hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    transform: ${props => (!props.disabled ? "translateY(-2px)" : null)};
    background: ${props => (!props.disabled ? darken(0.07, "#f6540d") : null)};
  }
`;
