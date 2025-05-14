const express = require("express");
const PORT = 3000;

const STATUS_CODES = {
  BAD_REQUEST: 400,
  OK: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
const app = express();
app.use(express.json());

const users = [
  {
    name: "Phurba",
    email: "phurbasekai134@gmail.com",
    password: "dexxybitch3",
  },
];
let loggedInUser = null;

const checkLoggedIn = (req, res, next) => {
  if (loggedInUser) {
    return next();
  }
  res
    .status(STATUS_CODES.UNAUTHORIZED)
    .json({ message: "please login to access this route" });
};
app.post("/login", (re, res) => {
  if (!re.body) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "body is empty! please provide email and password" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "please provide email and password" });
  }
  const user = user.find((item) => item.email === email);
  if (!user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ message: `the peovided ${email} does not exist` });
  }
  if (user.password !== password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: `peovide correct password` });
  }
  loggedInUser = user;
  res.status(STATUS_CODES.OK).json({ message: "successfully loggedout" });
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
