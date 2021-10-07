import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component:Navbar, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Navbar {...props}  />
        ) : (
          <Redirect to="/login" />
        
        )
        
      }
      
    />
  );
};

export default PrivateRoute;
