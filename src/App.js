import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import OurTeam from "./components/ourteam/OurTeam";
import Aboutus from "./components/Aboutus/Aboutus";
import Campaign from "./components/Campaign/Campaign";
import Webinar from "./components/Webinar/Webinar";
import Internship from "./components/Internship/Internship.jsx";
=======
// import Campaign from "./components/Campaign/Campaign";
import OurTeam from "./components/ourteam/OurTeam";
import Aboutus from "./components/Aboutus/Aboutus";
// import Webinar from "./components/Webinar/Webinar";
>>>>>>> 0f8b67797aa91b8283d955dbcc9944306c8678bf

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/campaign" component={Campaign} /> */}
      <Route exact path="/ourteam" component={OurTeam} />
      <Route exact path="/about-us" component={Aboutus} />
<<<<<<< HEAD
      <Route exact path="/webinars" component={Webinar} />
      <Route exact path="/internship" component={Internship} />
=======
      {/* <Route exact path="/webinars" component={Webinar} /> */}
>>>>>>> 0f8b67797aa91b8283d955dbcc9944306c8678bf
    </Router>
  );
}

export default App;
