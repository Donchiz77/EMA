import { render } from "@testing-library/react";
import React from "react";
import classes from '../home/home.css';
import "../home/home.css";
import logo from '../../../assets/images/Moar.png';
import img1 from '../../../assets/images/doctor-image-1.jpg';



function home () {
  return(
    <section>
    
          <div className={classes.Photo}>
            <img className={classes.Logo} src={logo} alt="logo"></img>
          </div>

          <div className= "card text-center" >
            <div className="overflow">
                <img src={img1} alt="doctor"/>
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Card Title</h4>
              <p className="card-text text-secondary">
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry
              </p>
              <a href="patientrecord" className= "btn btn-outline-success">Go Anywhere</a>
            </div>
          </div>

    </section>
  )
}


   
  




export default home;