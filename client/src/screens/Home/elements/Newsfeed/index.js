import React from "react";

import { NewsfeedContainer } from "./style";
import { Nav, Content } from "./elements";

const Newsfeed = () => {
  return (
    <NewsfeedContainer>
      <Nav />
      <Content />
    </NewsfeedContainer>
  );
};

export default Newsfeed;
