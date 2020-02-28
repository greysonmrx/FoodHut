import React from "react";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return <div>{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
