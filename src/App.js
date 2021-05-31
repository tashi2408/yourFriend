import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'

function App() {
  return (
     <Router>
      <Route path='/' exact component={Home} />
    </Router>
  );
}

export default App;
