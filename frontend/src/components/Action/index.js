import React from "react";
import PropTypes from "prop-types";
import { MdDelete, MdModeEdit, MdVisibility } from "react-icons/md";

import { Container } from "./styles";

export default function Action({ type, ...rest }) {
  function handleType() {
    const types = {
      delete: <MdDelete size={20} color="#FFFFFF" />,
      edit: <MdModeEdit size={20} color="#FFFFFF" />,
      view: <MdVisibility size={20} color="#FFFFFF" />
    };

    return types[type];
  }

  function handleTypeColor() {
    const types = {
      delete: "#e53935",
      edit: "#FBC02D",
      view: "#039BE5"
    };

    return types[type];
  }

  return (
    <Container {...rest} color={handleTypeColor()}>
      {handleType()}
    </Container>
  );
}

Action.propTypes = {
  type: PropTypes.oneOf(["delete", "edit", "view"])
};
