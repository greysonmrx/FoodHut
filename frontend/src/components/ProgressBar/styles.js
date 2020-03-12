import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 10px;
  background: ${props => lighten(0.4, props.color)};

  div {
    position: relative;
    width: ${props => props.progress}%;
    height: 100%;
    background: ${props => props.color};

    div {
      position: absolute;
      bottom: -35px;
      right: calc(-45px / 2);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 25px;
      border-radius: 2px;
      background: ${props => props.color};

      span {
        color: #fff;
        font-size: 14px;
      }

      &::before {
        content: "";
        position: absolute;
        left: calc(50% - 7px);
        top: -7px;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid ${props => props.color};
      }
    }
  }
`;
