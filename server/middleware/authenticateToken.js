const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
    // Option 1
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1]; // Bearer Token
  
    // Option 2
    const token = req.header("x-auth-token");

     // If token not found, send error message
  if (!token) {
    res.status(401).json({
      errors: [
        {
          msg: "Token not found",
        },
      ],
    });
  }
