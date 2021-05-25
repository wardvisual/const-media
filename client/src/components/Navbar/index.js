import React from "react";
import {
  MessengerIcon,
  NotificationsIcon,
  PersonIcon,
  SearchIcon,
  TogglesIcon,
  UserFriendsIcon,
} from "../Icons";

import { NavbarContainer, SearchBox } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="content">
        <div>
          <span>
            <MessengerIcon />
          </span>
          <h3>
            <span>Const</span> Media
          </h3>
        </div>
        <SearchBox>
          <SearchIcon />
          <input type="text" placeholder="Search..." />{" "}
        </SearchBox>
        <div>
          <UserFriendsIcon />
          <NotificationsIcon />
          <TogglesIcon />
          <PersonIcon />
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
