import styled from "styled-components";
import { Link } from "react-router-dom";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  height: 100%;
  background: #ffffff;
  width: 280px;
  padding: 25px 25px;
`;

export const Content = styled.div`
  padding-bottom: 30px;

  button {
    margin-top: 30px;

    svg {
      margin-left: 15px;
    }
  }

  img {
    width: 60%;
  }
`;

export const Links = styled.div`
  padding: 0 0 30px 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  max-height: calc(100% - 250px);
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 100%;
`;

export const LinkTo = styled(Link)`
  margin: 10px;

  &&:hover span,
  &&:hover svg {
    color: #f6540d;
  }
`;

export const LinkContent = styled.nav`
  display: flex;
  padding: 10px 0 10px 30px;
  align-items: center;

  span,
  svg {
    color: ${props => (props.active ? "#f6540d" : "#b1b1b3")};
  }

  svg {
    font-size: 20px;
  }
`;

export const LinkName = styled.span`
  font-size: 16px;
  margin-left: 15px;
  font-weight: 400;
`;
