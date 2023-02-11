const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');

const SECRET = 'SomeSecret';

exports.findByUsername = (username) => User.findOne({ username });

exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    throw new Error('Password missmatch!');
  }
  //Check if user exists
  const existingUser = await this.findByUsername(username);
  if (existingUser) {
    throw new Error('User exists!');
  }

  //Validate password

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hashedPassword });
};

exports.login = async (email, password) => {
  //User exists
  const user = await this.findByEmail(email);

  if (!user) {
    throw new Error('Invalid email or password!');
  }
  //Password is valid
  const isValid = await bcrypt.compare(user.password, password);
  if (!isValid) {
    throw new Error('Invalid email or password!');
  }
  //Generate token
  const payload = { _id: user._id, email: user.email, username: user.username };
  const token = await jwt.sign(payload, SECRET);
  return token;
};
