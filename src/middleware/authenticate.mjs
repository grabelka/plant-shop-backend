import jwt from "jsonwebtoken";
import config from '../config/config.mjs';

function authenticate(req, res, next) {
  const token = req.headers.authorization || req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    jwt.verify(token, config.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).send('Not authorised!');
  }
}

export {
  authenticate
}