import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <footer>
        <p>FoodHut versão 0.0.1</p>
        <p>Greyson 2020 © Todos os direitos reservados</p>
      </footer>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
