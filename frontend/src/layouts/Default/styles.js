import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: #f5f5f5;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ChildrenContent = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 5px;
`;
