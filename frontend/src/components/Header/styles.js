import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 15px;
    font-weight: 500;
    color: #616161;
    margin-right: 5px;
  }

  svg {
    font-size: 25px;
    margin-right: 10px;
    color: #00e676;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #616161;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: #212121;
    margin: 0 15px;
  }

  svg {
    color: #212121;
  }
`;
