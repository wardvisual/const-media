import React from "react";
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
      <UserFriendsIcon />
      <NotificationsIcon />
      <TogglesIcon />
      <PersonIcon />
    </NavContainer>
  );
};

export default Nav;
