const revokedToken = require("../models/revokedToken.model");
const User = require("../models/user.model");
const { createHash, compareHash } = require("../utils/hash.util");
const { createJWTToken } = require("../utils/jwt.util");

const signin = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });

  if (!user) {
    return { userNotFound: true };
  }

  const isPasswordMatched = await compareHash(password, user.password);

  if (!isPasswordMatched) return { passwordMismatch: true };

  delete User.password; // deleted the key password

  const token = createJWTToken(user.toJSON());

  return { token };
};
const signup = async (data) => {
  const { email } = data;
  const user = await User.findOne({ email: email });

  if (user) {
    return { userAlreadyExists: true };
  }

  data.password = await createHash(data.password);

  const newuser = new User(data);
  const savedUser = await newuser.save();
  return { user: savedUser };
};

const signout = async (token) => {
  const newToken = new revokedToken({ token });
  await newToken.save();
};

module.exports = { signin, signup, signout };
