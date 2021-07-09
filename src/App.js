import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import OurTeam from "./components/ourteam/OurTeam";
import Aboutus from "./components/Aboutus/Aboutus";
import Campaign from "./components/Campaign/Campaign";
import Webinar from "./components/Webinar/Webinar";
import Internship from "./components/Internship/Internship.jsx";
// import Campaign from "./components/Campaign/Campaign";
import Ourteam from "./components/ourteam/OurTeam";
import aboutus from "./components/Aboutus/Aboutus";
// import Webinar from "./components/Webinar/Webinar";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/campaign" component={Campaign} /> */}
      <Route exact path="/ourteam" component={Ourteam} />
      <Route exact path="/about-us" component={aboutus} />
      <Route exact path="/webinars" component={Webinar} />
      <Route exact path="/internship" component={Internship} />
      {/* <Route exact path="/webinars" component={Webinar} /> */}
    </Router>
  );
}

export default App;
