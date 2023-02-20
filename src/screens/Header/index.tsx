import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import { HeaderNav } from "./styles";
import Spacer from "../../components/Spacer";

function Header() {
  return (
    <>
      <HeaderNav>
        <NavBar />
      </HeaderNav>
      <Spacer height={1} />
    </>
  );
};

export default Header;
