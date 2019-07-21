const JWT = require('jsonwebtoken');

module.exports = (req, _, next) => {
  const isAuth = req.get('Authorization');
  // if the user is not Authorized
  if (!isAuth) {
    req.isAuth = false;
    return next();
  }

  // if the header exists
  const token = isAuth.split(' ')[1];

  // if the token does not exist
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decoded;
  try {
    decoded = JWT.verify(token, 'TheSecretCombinationIsAMysteryForYou');

    if (!decoded) {
      req.isAuth = false;
      return next();
    }

    req.isAuth = true;
    req.userId = decoded.userId;
  } catch (e) {
    req.isAuth = false;
    return next();
  }

  return next();
};
