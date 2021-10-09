//import { render } from "@testing-library/react";
import React from "react";
import "./home.css";
import logo from '../../../assets/images/Moar.png';






function home () {
  return(

  <div>
    <div>
      <img className="logo" src={logo} alt="logo"></img>
    </div>


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
  </div>
</section>
</div>
  ) 
}

export default home;


