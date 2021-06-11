import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Campaign from "./components/Campaign/Campaign";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/campaign" component={Campaign} />
    </Router>
  );
}

export default App;
