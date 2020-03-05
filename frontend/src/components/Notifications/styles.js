import styled, { css } from "styled-components";
import { lighten } from "polished";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  position: relative;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #f6540d;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const Content = styled.div`
  z-index: 99999;
  display: ${props => (props.visible ? "block" : "none")};
  position: absolute;
  width: 440px;
  left: calc(50% - 230px);
  top: calc(100% + 20px);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f6540d;
  }
`;

export const NotificationList = styled.ul`
  padding: 15px 5px;
`;

export const Header = styled.div`
  width: 100%;
  background: #f6540d;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 15px;

  span {
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #212121;
  display: flex;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  div {
    padding: 8px 10px 0 10px;
  }

  img {
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    border-radius: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  span {
    color: #212121;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    margin: 8px 0 10px 0;
    color: #999999;
    font-size: 14px;
    font-weight: 700;
  }

  time {
    color: #999999;
    font-size: 14px;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, "#f6540d")};
    padding: 0 5px;
    margin: 0 5px;
    font-weight: bold;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        align-self: center;
        display: inline-block;
        min-width: 8px;
        min-height: 8px;
        margin-left: 5px;
        background: #f6540d;
        border-radius: 50%;
      }
    `}
`;

export const NoNotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 130px;
  }

  span {
    color: #212121;
    margin-top: 30px;
    font-size: 14px;
    font-weight: 500;
  }
`;
