// Note: Uncomment import lines during working with JSX Compiler.
import React from 'react';
 import { Link, Route } from "react-router-dom";
 import HomePage from "../pages/homepage/index";

function login(props){
    return(
    <div>
        <HomePage>

            <div className="homepage">

                <h1 className="">Login Here</h1>
                <form className="row" style={{margin:"25px 85px 75px 100px"}}>
                    <label>Name</label>
                    <input type="text" name="name"  className="form-control"/>

                    <label>Username</label>
                    <input type="text" Username="username"className="form-control" />

                    <label>Message</label>
                    <textarea name="massage"row ="4"className="form-control"  />
                    <input type="submit" value="send" className="form-control btn btn-dark" style={{marginTop:'30px'}}/>
                </form>
      
            </div>
        
        </HomePage>
    </div>
        

    )

}
export default login;