const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
  console.log('verify', req.headers);
  console.log('verify', req.body);
  if (req.headers && req.headers.token) {
    jwt.verify(req.headers.token, 'SECRET', (err, decoded) => {
      if (err) {
        res.status(401).send({error: 'Invalid token'});
      } else {
        console.log('decoded', decoded);
        req.decoded = decoded.id;
        next();
      }
    });
  } else {
    res.status(401).send({error: 'Invalid token'});
  }
};

const socketVerify = (socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token) {
        jwt.verify(socket.handshake.query.token, 'SECRET', (err, decoded) => {
            if (err) {
                return next(new Error('Authentication Error'));
            }
            socket.decoded = decoded;
            console.log('An user authenticated');
            next();
        });
    }
    next(new Error('Authentication Error'));
};

module.exports = {
  verify,
  socketVerify
}