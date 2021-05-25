import React from "react";
import { Nav, Content } from "./elements";

import { SidebarLeftContainer } from "./style";

const SidebarLeft = () => {
  return (
    <SidebarLeftContainer>
      <Nav />
      <Content />
    </SidebarLeftContainer>
  );
};

export default SidebarLeft;
