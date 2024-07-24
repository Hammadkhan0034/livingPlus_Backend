const dotenv = require('dotenv').config();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, 'fc02a79f434b9a0e4994f3bce9ddec6d1695d58cc108cb170b591f80ce2a3662dcb3658d46e75e46385ae9d7bd62e6cf61df612ce1fe018a7027e0475e850725', (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error(err);
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized or token is missing");
  }
});

module.exports = validateToken;
