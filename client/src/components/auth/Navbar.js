import React from "react";
import "./navbar.css"
//, { useState }

//import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
//import SignUpForm from "./SignUp";
//import LoginForm from "./Login";
//
//import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  //const [showModal, setShowModal] = useState(false);

  return(
    <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
  )
};

export default AppNavbar;
