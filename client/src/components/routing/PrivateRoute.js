import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ component: home, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <home {...props}  />
        ) : (
          <Redirect to="/login" />
        
        )
        
      }
      
    />
  );
};

export default PrivateRoute;
