import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./screens";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
