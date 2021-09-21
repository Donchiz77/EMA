import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index.js";
import Schedule from "./components/pages/schedule/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Schedule />
    </div>
  );
}


export default App;
