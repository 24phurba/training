const authService = require("../services/auth.service");

const signin = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty` });
  }

  const keys = Object.keys(req.body);

  const requireKeys = ["email", "password"];

  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }

  const result = await authService.signin(req.body);

  if (result.userNotFound) {
    return res.status(404).json({
      message: `User not found with the provided email ${req.body.email}`,
    });
  }
  if (result.passwordMismatch) {
    return res
      .status(400)
      .json({ message: `The password you have provided is incorrect` });
  }
  res.json({ token: result.token });
};

const signup = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty` });
  }

  const keys = Object.keys(req.body);
  const requireKeys = ["name", "phoneNumber", "email", "password"];

  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }

  const { email, password } = req.body;
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%\^&*]).{8,}$/;

  if (password.length < 8) {
    return res.status(400).json({
      message: `The password must be more than 8 char, one small, one number and one special character`,
    });
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: " password is not strong enough" });
  }

  const result = await authService.signup(req.body);

  if (result.userAlreadyExists)
    res.status(401).json({ message: `User with ${email} already  exists` });

  return res.status(201).json({
    message: `${email} : created successfully`,
  });
};

const Signout = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  await authService.signout(token);
  res.status(204).json({
    message: `Signout successfully`,
  });
};

module.exports = { signin, signup, Signout };
