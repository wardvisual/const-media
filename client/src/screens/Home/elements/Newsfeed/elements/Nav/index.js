import React from "react";
import { SearchBox } from "../../../../../../components";
import {
  TogglesIcon,
  UserFriendsIcon,
  NotificationsIcon,
  PersonIcon,
} from "../../../../../../components/Icons";
import { NavContainer } from "../../style";

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <h2>Hi Edward!</h2>
        <SearchBox />
      </div>
    </NavContainer>
  );
};

export default Nav;
