import { render } from "@testing-library/react";
import React from "react";
import classes from '../home/home.css';
import "../home/home.css";
import logo from '../../../assets/images/Moar.png';




function home(){
    return (
      <div className={classes.Photo}>
        <img className={classes.logo} src={logo} alt="logo"></img> 
      </div>
    );
  }




export default home;