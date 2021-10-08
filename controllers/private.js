const jwt = require("jsonwebtoken");

exports.getPrivateRoute = (req, res, next) => {
  console.log(req.headers);
  console.log("===================================");
  console.log(req.headers.authorization.split("Bearer ")[1]);
  console.log("===================================");

  jwt.verify(
    req.headers.authorization.split("Bearer ")[1],
    process.env.JWT_SECRET,
    (error, jwtVerify) => {
      if (error) {
        res.status(401).json({
          success: false,
          data: error.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: jwtVerify,
        });
      }
    }
  );
};
