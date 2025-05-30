const jwt = require("jsonwebtoken");
const jwtSecret = "Very Secret";

const createJWTToken = (data) => {
  return jwt.sign(data, jwtSecret);
};

const verifyJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (err) {
    console.log(err);
    return { error: err, message: err.message };
  }
};

module.exports = { createJWTToken, verifyJWTToken };
