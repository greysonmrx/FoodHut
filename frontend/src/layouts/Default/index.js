import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <SideBar />
      <Content>
        <Header />
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
