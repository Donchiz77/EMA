import { render } from "@testing-library/react";
import React from "react";
import classes from '../home/home.css';
import "./home.css";
import logo from '../../../assets/images/Moar.png';
import Card from './Cards';





function home () {
  return(
  <section className="container">
    <div className=" container">
          <div className="intro ">
              <h2 className="heading"> Welcome To Mother of all Records</h2>
                <p>At the M.O.A.R, we have got you covered with all things medical that you need-from doctor visits and hospitalization to <br>
                </br> preventative services and prescription drug coverage.</p>

              <h3>Leading the Way to Better Health</h3>
                <p>What makes M.O.A.R different is that we provide Medical plan with doctors and other porviders guiding how we deliver the high quality, coordianted care you need  </p>

                <h3>Commitment to Community</h3>
                <p>M.O.A.R mission is to transform the health of the community, one person at a time With offices in Charllote, Mathews, Pinville, our dedicated
                team of doctors, social service workers and customer service representative are commited to improving health in North Carolina</p>
          </div>
          
          <div >
              <Card/>
          </div>
          
  </div>
  <footer className="footer container-fluid">
      <div className="footer-middle">
      <div className="container footer-container">
        <div className="row">
        {/*column*/}
            <div className="col-md-3 col-sm-6 footer-col">
              <h4>location</h4>
                  <ul className="list-unstyled">
                      <li><a href="something">mathews</a></li>
                       <li><a href="something">Pinville</a></li>
                        <li><a href="something">cornelia</a></li>
                         <li><a href="something">rock hill</a></li>
                  </ul>
            </div>

            <div className="col-md-3 col-sm-6 footer-col">
              <h4>services</h4>
                  <ul className="list-unstyled">
                      <li><a href="something">faq</a></li>
                       <li><a href="something">all the drugs you need</a></li>
                        <li><a href="something">support</a></li>
                
                  </ul>
            </div>

            <div className="col-md-3 col-sm-6 footer-col ">
              <h4>contact</h4>
                  <ul className="list-unstyled">
                      <li><a href="something">email us</a></li>
                       <li><a href="something">call us</a></li>
                        
                  </ul>
            </div>

            <div className="col-md-3 col-sm-6 footer-col ">
              <h4>follow us</h4>
                  <ul className="list-unstyled">
                      <li><a href="something"><i class="fab fa-facebook"></i></a></li>
                       <li><a href="something"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="something"><i class="fab fa-instagram-square"></i></a></li>
                  </ul>
            </div>
        </div>
        {/*footer bottom*/}
        <div className="footer-bottom">
        <p className="text-xs-center">
        &copy;{new Date().getFullYear()}  M.O.A.R all rights reserved
        </p>
      </div>
      </div>
      </div>       
            
  
  </footer>
  
  

  
</section>
  ) 
}

export default home;

