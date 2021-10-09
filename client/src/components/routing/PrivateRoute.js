import { Redirect, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../pages/home";
import Navbar from "../Navbar/index";

const PrivateRoute = ({ components, path }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        console.log(data.data);
        //setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <Route
      exact
      path={path}
      component={() =>
        localStorage.getItem("authToken") ? (

          <>
            <Navbar />
            <Home />
            {components}
          </>

        ) : (
          <Redirect to="/login" />
        
        )
        
      }
      
    />
  );
};

export default PrivateRoute;
