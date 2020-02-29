import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  footer {
    position: absolute;
    bottom: 25px;
    text-align: center;

    p {
      font-size: 10px;
      margin-top: 10px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 85%;
    margin-bottom: 30px;
  }
`;
