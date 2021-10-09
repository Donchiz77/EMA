
import React, {Component} from "react"
import Card from "./Cardsui.js";
import './home.css'
import  img1  from '../../../assets/images/image-9.jpg';
import  img2  from '../../../assets/images/image-5.jpg';
import  img3  from '../../../assets/images/image-8.jpg';
    function Cards(){
        
        
            return(
                    <div className= " container-fluid d-flex justify-content-center ">
                        <div className=" row  ">
                            <div className= "col-md-4">
                            <Card imgsrc={img1} title='Treatment'/>
                            </div> 
                             
                            <div className= "col-md-4">
                            <Card imgsrc={img2} title='Health'/>
                            </div> 
                        
                            <div className= "col-md-4">
                            <Card imgsrc={img3} title='Community'/>
                            </div>
                         
                            
                        </div>

                    </div>
      
            )   
        }


export   default Cards;