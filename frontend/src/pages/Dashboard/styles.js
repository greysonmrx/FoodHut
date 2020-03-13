import styled from "styled-components";
import { lighten } from "polished";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: 100%;
  height: calc(100%);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const InfoCard = styled.div`
  position: relative;
  width: 23%;
  height: 150px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const LineChartCard = styled.div`
  width: 61%;
  height: 450px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  canvas {
    padding-top: 30px;
  }
`;

export const IconContent = styled.div`
  background: ${props => lighten(0.3, props.color)};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    font-size: 35px;
    color: ${props => props.color};
  }
`;

export const Stats = styled.div`
  margin-left: 20px;

  p {
    font-weight: bold;
    font-size: 20px;
    color: #212121;
    margin-bottom: 5px;
  }

  span {
    color: #999999;
    font-size: 17px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  svg {
    color: #999999;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  p {
    color: #212121;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ProductCard = styled.div`
  width: 36%;
  height: 450px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  img {
    width: 60%;
    max-height: 45%;
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    color: #212121;
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  b {
    font-size: 15px;
    margin-top: 50px;
  }
`;

export const OrdersContent = styled.div`
  width: 36%;
  height: 450px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const UsersContent = styled.div`
  width: 61%;
  height: 450px;
  padding: 40px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  table {
    background: #ffffff;
    width: 100%;
    padding: 20px 25px 20px 25px;
    border-radius: 10px;

    th {
      text-align: left;
      padding: 20px 8px;
      color: #999999;
      font-size: 16px;
    }

    td {
      text-align: left;
      padding: 10px 15px;
      font-weight: 500;
      color: #212121;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
  }

  img {
    border-radius: 50%;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  display: block;
  max-height: 100%;
  padding: 50px;
`;
