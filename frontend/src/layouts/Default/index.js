import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

import SideBar from "../../components/SideBar";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
