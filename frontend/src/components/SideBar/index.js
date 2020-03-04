import React from "react";
import {
  MdDashboard,
  MdGroup,
  MdLocalCafe,
  MdLocalOffer,
  MdRestaurant,
  MdSettings
} from "react-icons/md";

import { FaPlus } from "react-icons/fa";

import history from "../../services/history";

import {
  Container,
  Content,
  Links,
  Scroll,
  LinkTo,
  LinkContent,
  LinkName
} from "./styles";

import Button from "../Button";

import Logo from "../../assets/foodhut-logo.png";

export default function SideBar() {
  function handleActiveLink(name) {
    return history.location.pathname.split("/")[1] === name;
  }

  return (
    <Container>
      <Content>
        <img src={Logo} alt="FoodHut" />
        <Button onClick={() => {}}>
          Adicionar funcionário
          <FaPlus />
        </Button>
      </Content>
      <Links>
        <Scroll>
          <LinkTo to="dashboard">
            <LinkContent active={handleActiveLink("dashboard")}>
              <MdDashboard size={20} />
              <LinkName>Dashboard</LinkName>
            </LinkContent>
          </LinkTo>
          <LinkTo to="users">
            <LinkContent active={handleActiveLink("users")}>
              <MdGroup />
              <LinkName>Usuários</LinkName>
            </LinkContent>
          </LinkTo>
          <LinkTo to="products">
            <LinkContent active={handleActiveLink("products")}>
              <MdLocalCafe />
              <LinkName>Produtos</LinkName>
            </LinkContent>
          </LinkTo>
          <LinkTo to="categories">
            <LinkContent active={handleActiveLink("categories")}>
              <MdLocalOffer />
              <LinkName>Categorias</LinkName>
            </LinkContent>
          </LinkTo>
          <LinkTo to="pedidos">
            <LinkContent active={handleActiveLink("pedidos")}>
              <MdRestaurant />
              <LinkName>Pedidos</LinkName>
            </LinkContent>
          </LinkTo>
          <LinkTo to="settings">
            <LinkContent active={handleActiveLink("settings")}>
              <MdSettings />
              <LinkName>Configurações</LinkName>
            </LinkContent>
          </LinkTo>
        </Scroll>
      </Links>
      <Button onClick={() => {}}>Sair</Button>
    </Container>
  );
}
