import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'

function App() {
  return (
     <Router>
      <Switch>
      <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
