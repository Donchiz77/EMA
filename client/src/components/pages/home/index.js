import { render } from "@testing-library/react";
import React from "react";
import classes from '../home/home.css';
import "../home/home.css";
import logo from '../../../assets/images/Moar.png';



<<<<<<< HEAD

function home(){
   
=======
function home () {
  return(
    <div className={classes.Photo}>
      <img className={classes.Logo} src={logo} alt="logo"></img>
    </div>
  )
}
>>>>>>> 2f3b972872cc7ffcf001313ffb68e37828b937fa


    return (
      <div>
        <h1>Home</h1>
      
        
      </div>
    );
  }




export default home;