import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Startup from "./pages/Startup";
import NoMatch from "./pages/NoMatch";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
