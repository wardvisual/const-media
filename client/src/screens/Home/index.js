import React from "react";
import { Newsfeed, SidebarLeft, SidebarRight } from "./elements";

import { HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <SidebarLeft />
      <Newsfeed />
      <SidebarRight />
    </HomeContainer>
  );
};

export default Home;
