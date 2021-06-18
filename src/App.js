import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Campaign from "./components/Campaign/Campaign";
import OurTeam from "./components/ourteam/OurTeam";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/campaign" component={Campaign} />
      <Route exact path="/ourteam" component={OurTeam} />
      <Route exact path="/about-us" component={Aboutus} />
    </Router>
  );
}

export default App;
