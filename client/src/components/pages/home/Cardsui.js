import React from "react";

import './index.js';
import './Cards.js'
import './home.css'


function Cardsui (props) {
  return(
    <section>
    
    <div className= "card text-center shadow" >
      <div className="overflow">
          <img className="photo card-img-top" src={props.imgsrc} alt="doctor"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. 
          Lorem Ipsum has been the industry
        </p>
        <a href="patientrecord" className= "btn btn-outline-primary btn-sm">Go Anywhere</a>
      </div>
    </div>

</section>
)
}










export default Cardsui;
          
