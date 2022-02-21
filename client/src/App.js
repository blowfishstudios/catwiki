import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Startup from "./pages/Startup";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route exact path="/api" component={Landing} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
