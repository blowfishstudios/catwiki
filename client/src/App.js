import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Startup from "./pages/Startup";
import Landing from "./pages/Landing";
import BreedInfo from "./pages/BreedInfo";
import NoMatch from "./pages/NoMatch";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route exact path="/api" component={Landing} />
        <Route path="/:name" component={BreedInfo} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
