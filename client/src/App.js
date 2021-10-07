import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";


import NavBar from "./components/Navbar";

import Home from "./components/pages/home";
import Patientrecord from "./components/pages/patientRecord";
import Schedule from "./components/pages/schedule";


const App = () => {
  return (
    <Router>
      <div className="app">
      <NavBar/>
        <Switch>
          
          <PrivateRoute exact path="/" component={PrivateScreen} />
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
        <privateRoute exact path = "/" component = {PrivateRoute} />

        <div>
    
        

        <Route  path = "/home" component = {Home}/>
        <Route  path = "/patientRecord" component = {Patientrecord}/>
        <Route path = "/schedule" component = {Schedule}/>
        </div>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
