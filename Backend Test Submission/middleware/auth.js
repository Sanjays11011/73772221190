
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== "Bearer mysecrettoken") {
    return res.status(401).json({ message: 'Unauthorized' });
  }


  req.user = { id: 1, username: 'john_doe' };
  next();
};

module.exports = authMiddleware;
