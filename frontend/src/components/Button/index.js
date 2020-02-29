import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Button({ isDisabled, children, ...rest }) {
  return (
    <Container disabled={isDisabled} {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  isDisable: PropTypes.bool,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  isDisable: false
};
