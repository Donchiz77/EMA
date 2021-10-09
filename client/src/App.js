import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/home/index";
import LoginScreen from "./components/screens/Login";
import RegisterScreen from "./components/screens/Register";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPassword from "./components/screens/ResetPassword";
import React from "react";
import Schedule from "./components/pages/Schedule/index.js";
import PatientRecord from "./components/pages/patientRecord/index";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={Navbar} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <PrivateRoute exact path="/home" components={<Home />} />
          <PrivateRoute exact path="/Schedule" components={<Schedule />} />
          <PrivateRoute
            exact
            path="/patientRecord"
            components={<PatientRecord />}
          />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
