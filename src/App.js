import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTab from "./components/Navbar";
import Home from "./components/pages/homePage";
import patientDemographic from "./components/pages/patientDemographic/index";
import PatientRecord from "./components/pages/patientRecord/index";
import Schedule from "./components/pages/schedule/index";
import Wrapper from "./components/Wrapper";





function App () {
  return (
    
      <div>
      <Router>
        <NavTab />
        <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/PatientDemographic" component={patientDemographic} />
        <Route exact path="/patientRecord" component={PatientRecord} />
        <Route path="/schedule" component={Schedule} />
        </Switch>
        </Wrapper>
        </Router>
      </div>
    
  );
}

export default App;