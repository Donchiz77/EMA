import React, { Component } from "react";
import NavBar from "./navbar";
import Home from "./pages/homepage";
import Login from "./pages/login";
import PatientRecord from "./pages/patientRecord";
import SignUp from "./pages/signup";

class AppContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Login") {
      return <Login />;
    } else if (this.state.currentPage === "Blog") {
      return <PatientRecord />;
    } else {
      return <SignUp />;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default AppContainer;
