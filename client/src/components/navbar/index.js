import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { menuList } from "./menuList";
import icon from "../../assets/images/navlogo.png";
//import Home from"../pages/home";
import "../pages/patientRecord";
import "../pages/schedule";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  //mapping menuList...pulling title and url
  const MenuList = menuList.map(({ url, title }, index) => {
    return (
      //this key is used to identify each title...the NavLink is used unstead of an anchor tag
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div>
        <img className="icon" src={icon} alt="icon"></img>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "Menu-list" : "Menu-list close"}>{MenuList}</ul>

      <div>
        <button className="logout">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
