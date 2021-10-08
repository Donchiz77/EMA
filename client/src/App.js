import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/Navbar/index";
import Home from "./components/pages/home/index";
import LoginScreen from "./components/screens/Login";
import RegisterScreen from "./components/screens/Register";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";
import React from "react";
import Schedule from "./components/pages/schedule/index";
import PatientRecord from "./components/pages/patientRecord/index";
//import DefHeader from "./components/pages/definition/defHeader";
////import Definition from "./components/pages/definition/definition";
//import { Container } from "@material-ui/core";

const App = () => {
  return (
    //<div
    //  className="App"
    //  style={{ height: "100vh", backgroundColor: "gray", color: "white" }}
    //>
    //  <Container
    //    maxWidth="md"
    //    style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    //  >
    //    <DefHeader category={category} setCategory={setCategory} />
    //  </Container>
    //</div>
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute
            exact
            path="/patientRecord"
            components={<PatientRecord />}
          />
          <PrivateRoute exact path="/home" components={<Home />} />
          <PrivateRoute exact path="/schedule" components={<Schedule />} />
          <Route exact path="/" component={Navbar} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
