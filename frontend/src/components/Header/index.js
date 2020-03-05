import React from "react";
import { IoIosRadio, IoIosArrowDown } from "react-icons/io";

import { Container, LeftContent, RightContent, Profile } from "./styles";

import Notifications from "../Notifications";

export default function Header() {
  return (
    <Container>
      <LeftContent>
        <IoIosRadio />
        <span>1000</span>
        <span>On-line</span>
      </LeftContent>
      <RightContent>
        <Notifications />
        <Profile to="/profile">
          <img
            src={`https://api.adorable.io/avatars/50/${"Greyson Mascarenhas"}.png`}
            alt={"Greyson Mascarenhas"}
          />
          <span>{"Greyson Mascarenhas"}</span>
          <IoIosArrowDown />
        </Profile>
      </RightContent>
    </Container>
  );
}
