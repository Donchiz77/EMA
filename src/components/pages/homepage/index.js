import React from "react";
import "./style.css";

function homepage(props) {
    return (
    <div className="homepage">
      {props.children}
    </div>
    );
}

export default homepage;