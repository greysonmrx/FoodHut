import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content, ChildrenContent } from "./styles";

import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <SideBar />
      <Content>
        <Header />
        <ChildrenContent>{children}</ChildrenContent>
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
