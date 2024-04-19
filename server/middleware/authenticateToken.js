const jwt = require("jsonwebtoken");
require('dotenv').config();

const authToken = async (req, res, next) => {
    // Option 1
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split("w ")[1]; // Bearer Token
  
    // Option 2
//!     const token = req.header("x-auth-token");
// //! a bunch of methads that we can use in the resolvers
//      // If token not found, send error message
//   if (!token) {
//     res.status(401).json({
//       errors: [
//         {
//           msg: "Token not found",
//         },
//       ],
//     });
//   }

  // Authenticate token
  try {
    console.log("NOTICE ME!!", process.env.ACCESS_TOKEN_SECRET)
    const user = await jwt.verify(token, "abc123");
    console.log(user)
    req.user = user.email;
    next();
  } catch (error) {
    res.status(403).json({
      errors: [
        {
          msg: "Invalid token",
        },
      ],
    });
  }
};

module.exports = authToken;