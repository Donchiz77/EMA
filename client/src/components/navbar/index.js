import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import{menuList} from "./menuList"



function navbar(){

      const MenuList = menuList.map(({url, title}, index)=> {
        return(
            <li key={index}>
              <NavLink exact to = {url} activeClassName ="active">{title}</NavLink>
            </li>
        );
      });
  return(
          <nav className="">
              <div className="logo-1">
                  <h3 className = "logo-2">logo</h3>
              </div>
              <div className="menu-icon">
                <i className="fa fa-bars"></i>
              </div>
              <ul className="Menu-list">{MenuList}</ul>

              <div>
                <p className="logout">logout</p>
              </div>
          </nav>
  )
}






export default navbar