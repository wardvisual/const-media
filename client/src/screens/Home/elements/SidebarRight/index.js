import React from "react";
import { Nav, Content } from "./elements";

import { SidebarRightContainer } from "./style";

const SidebarRight = () => {
  return (
    <SidebarRightContainer>
      <Nav />
      <Content />
    </SidebarRightContainer>
  );
};

export default SidebarRight;
