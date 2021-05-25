import React from "react";
import { MessengerIcon } from "../../../../../../components/Icons";
import { NavContainer } from "../../style";

const Nav = () => {
  return (
    <NavContainer>
      <span>
        <MessengerIcon size="2.7" />
      </span>
      <h2>
        <span>Const</span> Media
      </h2>
    </NavContainer>
  );
};

export default Nav;
