import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";
import { IoMdInformationCircle } from "react-icons/io";

import { Container } from "./styles";

export default function Input({ name, Icon, style, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error} style={style}>
      <div>
        {Icon && <Icon size={20} />}
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        {error && <IoMdInformationCircle size={20} />}
      </div>
      {error && <span>{error}</span>}
    </Container>
  );
}

Input.propType = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
  style: {}
};
